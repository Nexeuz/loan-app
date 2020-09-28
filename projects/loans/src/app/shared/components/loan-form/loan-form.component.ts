import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {environment} from '../../../../environments/environment';
import {RequestLoansService} from '../../../core/state/request-loans/request-loans.service';
import {AuthQuery} from '../../../core/state/auth/auth.query';
import {tap} from 'rxjs/operators';
import {AuthService} from '../../../core/state/auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UsersState} from '../../../core/state/users/users.store';
import {RequestLoan} from '../../../core/state/request-loans/request-loan.model';
import {Observable} from 'rxjs';
import {Profile} from '../../../core/state/auth/auth.model';
import {AuthStore} from '../../../core/state/auth/auth.store';
import {applyTransaction} from '@datorama/akita';

@Component({
  selector: 'zib-loan-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'value',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Valor a prestar',
        placeholder: 'Escribe el valor que quieres que te prestemos',
        required: true,
        min: 300000,
        max: environment.amount
      }
    },
  ];

  profile$: Observable<Profile>;
  profile: Profile;


  constructor(private requestLoan: RequestLoansService,
              private authQuery: AuthQuery,
              private authStore: AuthStore,
              private authService: AuthService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.profile$ = this.authQuery.profile$
      .pipe(
        tap(it => {
          this.profile = it;
        })
      );
  }

  async submit(): Promise<void> {
    if (this.profile.userStatus === 'new') {
      await this.updateRequest(this.profile.id, 'approved', 'approved', this.model.value);
    } else if (this.profile.userStatus === 'approved') {
      await this.updateOldUserRequestLoan(this.profile.id);
    } else {
      await this.rejectLoan(this.profile.id);
    }

    this.authService.sync()
      .subscribe();

  }


  showSnackBar(text: string): void {
    this.snackBar.open(text, 'Ok', {duration: 4000});
  }


  async updateOldUserRequestLoan(userId: string): Promise<any> {
    if (Math.floor(Math.random() * 3) === 0 && this.profile.creditPayment) {
      return this.updateRequest(userId, 'approved', 'approved', this.model.value);
    } else {
      return this.rejectLoan(userId);
    }
  }


  async rejectLoan(userId: string): Promise<any> {
    return this.updateRequest(userId, 'declined', 'declined', 0, null);
  }

  async updateRequest(userId: string, loanStatus: RequestLoan['loanStatus'],
                      userStatus: UsersState['profile.userStatus'], amount: number, declined?: null): Promise<any> {
    try {
      await applyTransaction(async () => {
        this.authStore.setLoading(true);
        await this.authService.update(state => ({
            ...state,
            creditPayment: false,
            userStatus,
            amount
          })
        );
        await this.requestLoan.add(
          {
            amount,
            loanStatus,
            userId,
            creditPayment: declined || false
          }
        );
        this.authStore.setLoading(false);
      });

      if (loanStatus === 'approved') {
        this.showSnackBar('¡Felicitaciones, hemos aprobado su prestamo :D!');
      } else {
        this.showSnackBar('Su solicitud de prestamo ha sido rechazada, lo sentimos');
      }
    } catch (e) {
      this.authStore.setLoading(false);
      console.log(e);
      this.showSnackBar('Se ha presentado un error general, intente nuevamente mas tarde');
    }

  }
}

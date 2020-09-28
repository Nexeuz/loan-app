import {Component, OnInit} from '@angular/core';
import {AuthQuery} from '../../../core/state/auth/auth.query';
import {Observable} from 'rxjs';
import {Profile} from '../../../core/state/auth/auth.model';
import {shareReplay, tap} from 'rxjs/operators';
import {AuthService} from '../../../core/state/auth/auth.service';
import {RequestLoansService} from '../../../core/state/request-loans/request-loans.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {applyTransaction} from '@datorama/akita';
import {AuthStore} from '../../../core/state/auth/auth.store';
import {RequestLoansStore} from '../../../core/state/request-loans/request-loans.store';
import {RequestLoansQuery} from '../../../core/state/request-loans/request-loans.query';

@Component({
  selector: 'zib-loan-pay-credit',
  templateUrl: './pay-credit.component.html',
  styleUrls: ['./pay-credit.component.scss']
})
export class PayCreditComponent implements OnInit {

  profile$: Observable<Profile>;
  profile: Profile;

  constructor(private authQuery: AuthQuery,
              private authService: AuthService,
              private authStore: AuthStore,
              private requestLoans: RequestLoansService,
              private requestLoanStore: RequestLoansStore,
              public requestLoansQuery: RequestLoansQuery,
              private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.requestLoanStore.setLoading(false);
    this.profile$ = this.authQuery.profile$
      .pipe(
        shareReplay(1),
        tap(it => {
          this.profile = it;
        })
      );
  }

  async pay(): Promise<void> {
    try {
      this.requestLoanStore.setLoading(true);
      const loanCollectionRef = await this.requestLoans.getValue(ref => ref.where('userId', '==', this.profile.id).where('creditPayment', '==', false));
      await applyTransaction(async () => {
        await this.authService.update(state => ({
          ...state,
          creditPayment: true,
          amount: 0
        }));

        await this.requestLoanStore.update(loanCollectionRef[0].id, state => ({
            ...state,
            loanStatus: 'paid',
            creditPayment: true
          })
        );
        this.requestLoanStore.setLoading(false);
      });
      this.authService.sync()
        .subscribe();
      this.snackBar.open('¡Has pagado tu préstamo exitosamente!', 'Ok');
    } catch (e) {
      this.requestLoanStore.setLoading(false);
      console.log(e);
      this.snackBar.open('Ha ocurrido un error general en la aplicación, intente nuevamente mas tarde', 'Ok');
    }
  }
}

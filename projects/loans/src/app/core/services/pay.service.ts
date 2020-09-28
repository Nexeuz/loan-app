import { Injectable } from '@angular/core';
import {applyTransaction} from '@datorama/akita';
import {AuthQuery} from '../state/auth/auth.query';
import {AuthService} from '../state/auth/auth.service';
import {AuthStore} from '../state/auth/auth.store';
import {RequestLoansService} from '../state/request-loans/request-loans.service';
import {RequestLoansStore} from '../state/request-loans/request-loans.store';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor(private authQuery: AuthQuery,
              private authService: AuthService,
              private authStore: AuthStore,
              private requestLoansService: RequestLoansService,
              private requestLoanStore: RequestLoansStore,
              private snackBar: MatSnackBar) { }

   async pay(userId: string): Promise<void> {
    try {
      this.requestLoanStore.setLoading(true);
      const loanCollectionRef = await this.requestLoansService.getValue(ref => ref.where('userId', '==', userId));
      const filterLoanCollection = loanCollectionRef.filter(it => it.creditPayment === false);
      await applyTransaction(async () => {
        await this.authService.update(state => ({
          ...state,
          creditPayment: true,
          amount: 0,
        }));
        await this.requestLoansService.update(filterLoanCollection[0].id, state => ({
            ...state,
            loanStatus: 'Pagado',
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

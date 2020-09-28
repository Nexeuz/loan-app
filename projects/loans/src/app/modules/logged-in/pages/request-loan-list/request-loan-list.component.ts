import {Component, OnInit} from '@angular/core';
import {RequestLoansService} from '../../../../core/state/request-loans/request-loans.service';
import {RequestLoansQuery} from '../../../../core/state/request-loans/request-loans.query';
import {UsersService} from '../../../../core/state/users/users.service';
import {from, Observable, of} from 'rxjs';
import {UsersQuery} from '../../../../core/state/users/users.query';
import {concatMap, scan, switchMap, takeLast, tap} from 'rxjs/operators';
import {UiQuery} from '../../../../core/state/ui-state/ui-query.service';
import {UiStore} from '../../../../core/state/ui-state/ui-store.service';


@Component({
  selector: 'zib-loan-request-loan-list',
  templateUrl: './request-loan-list.component.html',
  styleUrls: ['./request-loan-list.component.scss']
})
export class RequestLoanListComponent implements OnInit {

  request$: Observable<any>;
  columns = ['Nombre', 'Cédula', 'Email', 'Estado del préstamo', 'Crédito pagado', 'Monto', 'Pagar'];

  constructor(private usersService: UsersService,
              private userQuery: UsersQuery,
              private uiQuery: UiQuery,
              private uiStore: UiStore,
              private requestLoanService: RequestLoansService,
              private requestLoanQuery: RequestLoansQuery) {
  }

  ngOnInit(): void {
    this.usersService.syncCollection()
      .subscribe();
    this.loadRequest();

    this.uiQuery.select(it => it.filter)
      .pipe(
        tap(it => {
          if (it) {
            this.loadRequestStore();
            this.uiStore.update(state => ({
              ...state,
              filter: false
            }));
          }
        })
      )
      .subscribe();
  }

  loadRequest(): void {
    this.requestLoanService.syncCollection()
      .subscribe(sync => {
        this.loadRequestStore();
      });
  }

  loadRequestStore(): void {
    this.request$ = this.requestLoanQuery.selectAll()
      .pipe(
        switchMap(it => {
          if (it.length > 0) {
            return from(it)
              .pipe(
                concatMap(async con => {
                  const user = await this.usersService.getValue(con.userId);
                  return {
                    ['Nombre']: user.displayName,
                    ['Cédula']: user.dni,
                    ['Estado del préstamo']: con.loanStatus,
                    ['Monto']: con.amount,
                    ['Email']: user.email,
                    ['Crédito pagado']: con.creditPayment,
                    userId: con.userId
                  };
                }),
                scan((acc, value) => [...acc, value], []),
                takeLast(1)
              );
          } else {
            return [];
          }
        })
      );
  }

}



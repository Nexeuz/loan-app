import {Component, OnInit} from '@angular/core';
import {UsersQuery} from '../../../../core/state/users/users.query';
import {UsersService} from '../../../../core/state/users/users.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {RequestLoansService} from '../../../../core/state/request-loans/request-loans.service';

@Component({
  selector: 'zib-loan-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  columns = ['Nombre', 'Cédula', 'Email', 'Ver Solicitudes'];
  users$: Observable<any>;

  constructor(private usersQuery: UsersQuery,
              private usersService: UsersService,
              private requestLoanService: RequestLoansService) {
  }

  ngOnInit(): void {
    this.requestLoanService.syncCollection()
      .subscribe();
    this.usersService.syncCollection()
      .subscribe();
    this.users$ = this.usersQuery.selectAll()
      .pipe(
        map(it => {
          return it.map(prf => {
            return {
              ['Nombre']: prf.displayName,
              ['Cédula']: prf.dni,
              ['Email']: prf.email,
              ['Pagar']: prf.creditPayment,
              userId: prf.id
            };
          });
        })
      );
  }

}

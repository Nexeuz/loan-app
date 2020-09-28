import {Component, OnInit} from '@angular/core';
import {AuthQuery} from '../../../core/state/auth/auth.query';
import {Observable} from 'rxjs';
import {Profile} from '../../../core/state/auth/auth.model';
import {shareReplay, tap} from 'rxjs/operators';
import {RequestLoansStore} from '../../../core/state/request-loans/request-loans.store';
import {RequestLoansQuery} from '../../../core/state/request-loans/request-loans.query';
import {PayService} from '../../../core/services/pay.service';

@Component({
  selector: 'zib-loan-pay-credit',
  templateUrl: './pay-credit.component.html',
  styleUrls: ['./pay-credit.component.scss']
})
export class PayCreditComponent implements OnInit {

  profile$: Observable<Profile>;
  profile: Profile;

  constructor(private authQuery: AuthQuery,
              private requestLoanStore: RequestLoansStore,
              public requestLoansQuery: RequestLoansQuery,
              private payService: PayService) {

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
   await this.payService.pay(this.profile.id);
  }
}

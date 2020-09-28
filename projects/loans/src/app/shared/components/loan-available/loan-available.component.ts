import { Component, OnInit } from '@angular/core';

import {environment} from '../../../../environments/environment';
import {AuthQuery} from '../../../core/state/auth/auth.query';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'zib-loan-loan-available',
  templateUrl: './loan-available.component.html',
  styleUrls: ['./loan-available.component.scss']
})
export class LoanAvailableComponent implements OnInit {

  loanAvailable = environment.amount;
  constructor(public authQuery: AuthQuery) { }

  ngOnInit(): void {
    this.authQuery.profile$
      .pipe(
        tap(it => {
          if (it ? it.amount >= 0 : false) {
            this.loanAvailable = environment.amount;
            this.loanAvailable = this.loanAvailable - it.amount;
          }
        })
      ).subscribe();
    // Get the list from the store
  }

}

import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { RequestLoansStore, RequestLoansState } from './request-loans.store';

@Injectable({ providedIn: 'root' })
export class RequestLoansQuery extends QueryEntity<RequestLoansState> {

  constructor(protected store: RequestLoansStore) {
    super(store);
  }

}

import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { RequestLoan } from './request-loan.model';

export interface RequestLoansState extends EntityState<RequestLoan, string>, ActiveState<string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'request-loans' })
export class RequestLoansStore extends EntityStore<RequestLoansState> {

  constructor() {
    super();
  }

}

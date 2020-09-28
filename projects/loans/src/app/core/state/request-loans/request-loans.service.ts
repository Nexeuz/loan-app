import { Injectable } from '@angular/core';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { RequestLoansStore, RequestLoansState } from './request-loans.store';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'request-loans' })
export class RequestLoansService extends CollectionService<RequestLoansState> {

  constructor(store: RequestLoansStore) {
    super(store);
  }

}

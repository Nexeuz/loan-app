import { Injectable } from '@angular/core';
import {Query, QueryEntity} from '@datorama/akita';
import { UiStore, UiStateState } from './ui-store.service';

@Injectable({ providedIn: 'root' })
export class UiQuery extends Query<UiStateState> {

  constructor(protected store: UiStore) {
    super(store);
  }

}

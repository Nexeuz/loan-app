import { Injectable } from '@angular/core';
import { Store, StoreConfig} from '@datorama/akita';
import { UiState } from './ui-state.model';

export interface UiStateState extends UiState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ui-state' })
export class UiStore extends Store<UiStateState> {

  constructor() {
    super({filter: false});
  }

}

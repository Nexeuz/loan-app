import { Injectable } from '@angular/core';
import { AuthStore, AuthState } from './auth.store';
import {CollectionConfig, FireAuthService} from 'akita-ng-fire';


@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'users' })
export class AuthService extends FireAuthService<AuthState> {

  constructor(store: AuthStore) {
    super(store);
  }



}

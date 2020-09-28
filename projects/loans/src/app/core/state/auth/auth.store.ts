import { Injectable } from '@angular/core';
import { Profile } from './auth.model';
import { StoreConfig, Store } from '@datorama/akita';
import {FireAuthState, RolesState} from 'akita-ng-fire';

export interface AuthState extends FireAuthState<Profile>, RolesState {}

const initialState: AuthState = {
  uid: null,
  profile: null,
  roles: {},
  loading: false,
  email: null,
  emailVerified: false,
};
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {

  constructor() {
    super(initialState);
  }

}


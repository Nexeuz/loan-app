import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoLoggedGuard} from './core/guars/no-logged/no-logged.guard';
import {LoggedInGuard} from './core/guars/logged-in/logged-in.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./modules/no-logged/no-logged.module').then(m => m.NoLoggedModule),
    canActivate: [NoLoggedGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/logged-in/logged-in.module').then(m => m.LoggedInModule),
    canActivate: [LoggedInGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

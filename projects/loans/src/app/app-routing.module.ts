import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/no-logged/no-logged.module').then(m => m.NoLoggedModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/logged-in/logged-in.module').then(m => m.LoggedInModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

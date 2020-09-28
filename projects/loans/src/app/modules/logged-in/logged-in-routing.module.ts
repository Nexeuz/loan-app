import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedInComponent} from './logged-in.component';
import {HomeComponent} from './pages/home/home.component';
import {RequestLoanListComponent} from './pages/request-loan-list/request-loan-list.component';
import {UserListComponent} from './pages/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedInComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'request-loan-list',
        component: RequestLoanListComponent
      },
      {
        path: 'user-list',
        component: UserListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedInComponent} from './logged-in.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInRoutingModule { }

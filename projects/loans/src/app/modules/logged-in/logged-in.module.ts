import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedInRoutingModule } from './logged-in-routing.module';
import { LoggedInComponent } from './logged-in.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserListComponent } from './pages/user-list/user-list.component';
import { RequestLoanListComponent } from './pages/request-loan-list/request-loan-list.component';
import { HomeComponent } from './pages/home/home.component';
import {CoreModule} from '../../core/core.module';
import {MatCardModule} from '@angular/material/card';
import {SharedModule} from '../../shared/shared.module';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [LoggedInComponent, UserListComponent, RequestLoanListComponent, HomeComponent],
  imports: [
    CommonModule,
    LoggedInRoutingModule,
    MatSidenavModule,
    CoreModule,
    MatCardModule,
    SharedModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class LoggedInModule { }

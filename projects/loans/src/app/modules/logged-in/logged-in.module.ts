import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedInRoutingModule } from './logged-in-routing.module';
import { LoggedInComponent } from './logged-in.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UserListComponent } from './pages/user-list/user-list.component';
import { RequestLoanListComponent } from './pages/request-loan-list/request-loan-list.component';
import { HomeComponent } from './pages/home/home.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';


@NgModule({
  declarations: [LoggedInComponent, UserListComponent, RequestLoanListComponent, HomeComponent],
    imports: [
        CommonModule,
        LoggedInRoutingModule,
        MatSidenavModule,
    ]
})
export class LoggedInModule { }

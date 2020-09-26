import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoLoggedRoutingModule } from './no-logged-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NoLoggedComponent } from './no-logged.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {FormlyModule} from '@ngx-formly/core';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, NoLoggedComponent],
  imports: [
    CommonModule,
    NoLoggedRoutingModule,
    MatCardModule,
    MatButtonModule,
    FormlyMaterialModule,
    FormlyModule,
    ReactiveFormsModule
  ]
})
export class NoLoggedModule { }

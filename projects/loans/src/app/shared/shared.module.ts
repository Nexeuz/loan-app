import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoanAvailableComponent} from './components/loan-available/loan-available.component';
import {LoanFormComponent} from './components/loan-form/loan-form.component';
import {LoanContainerComponent} from './components/loan-container/loan-container.component';
import {MatCardModule} from '@angular/material/card';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {FormlyModule} from '@ngx-formly/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PayCreditComponent } from './components/pay-credit/pay-credit.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [LoanAvailableComponent, LoanFormComponent, LoanContainerComponent, PayCreditComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FormlyMaterialModule,
    FormlyModule.forChild(),
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatIconModule
  ], exports: [
    LoanContainerComponent,
    PayCreditComponent
  ]
})
export class SharedModule {
}

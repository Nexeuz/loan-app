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
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { DynamicTableModalComponent } from './components/dynamic-table-modal/dynamic-table-modal.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [LoanAvailableComponent, LoanFormComponent, LoanContainerComponent, PayCreditComponent, DynamicTableComponent, DynamicTableModalComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FormlyMaterialModule,
    FormlyModule.forChild(),
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatListModule
  ], exports: [
    LoanContainerComponent,
    PayCreditComponent,
    DynamicTableComponent
  ]
})
export class SharedModule {
}

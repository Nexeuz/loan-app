import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DynamicTableModalComponent} from '../dynamic-table-modal/dynamic-table-modal.component';
import {RequestLoansQuery} from '../../../core/state/request-loans/request-loans.query';
import {tap} from 'rxjs/operators';
import {RequestLoan} from '../../../core/state/request-loans/request-loan.model';
import {PayService} from '../../../core/services/pay.service';
import {AuthQuery} from '../../../core/state/auth/auth.query';
import {FormControl, Validators} from '@angular/forms';
import {AuthStore} from '../../../core/state/auth/auth.store';
import {UiStore} from '../../../core/state/ui-state/ui-store.service';

@Component({
  selector: 'zib-loan-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  @Input() displayedColumns: string[];
  @Input() dataSource: any;
  @Input() tableTitle: string;
  request: RequestLoan [];

  formControl = new FormControl('');

  constructor(private matDialog: MatDialog,
              private requestLoansQuery: RequestLoansQuery,
              private payService: PayService,
              private authStore: AuthStore,
              private uiStore: UiStore) {
  }

  ngOnInit(): void {
    this.requestLoansQuery.selectAll()
      .pipe(
        tap(request => {
          this.request = request;
        })
      ).subscribe();
  }

  applyFilter(event: KeyboardEvent): void {
    const filterValue = this.formControl.value.toLowerCase().trim();
    if (filterValue.length > 4) {
      this.dataSource = this.dataSource.filter(it => it['Estado del préstamo'].toLowerCase().includes(filterValue));
    }
  }

  openSolicitudes(userId: string): void {
    this.matDialog.open(DynamicTableModalComponent, {
      data: this.request.filter(it => it.userId === userId),
      maxHeight: '90vh',
      maxWidth: '90vw'
    });
  }

  async payLoan(userId: string): Promise<void> {
   await this.payService.pay(userId);
  }

  resetFilter(): void {
    this.formControl.setValue('');
    this.uiStore.update(it => ({
      ...it,
      filter: true,
    }));
  }
}

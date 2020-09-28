import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'zib-loan-dynamic-table-modal',
  templateUrl: './dynamic-table-modal.component.html',
  styleUrls: ['./dynamic-table-modal.component.scss']
})
export class DynamicTableModalComponent implements OnInit, OnDestroy {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
               public dialogRef: MatDialogRef<DynamicTableModalComponent>) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.dialogRef.close();
  }

}

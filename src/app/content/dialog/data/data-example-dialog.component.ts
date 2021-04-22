import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-data-example-dialog',
  templateUrl: './data-example-dialog.component.html',
  styleUrls: ['./data-example-dialog.component.scss']
})
export class DataExampleDialogComponent {
  constructor(private dialogRef: MatDialogRef<DataExampleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {title: string} ) {
  }

  close(color: string): void {
    this.dialogRef.close(color);
  }
}

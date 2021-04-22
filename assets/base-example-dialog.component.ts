import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-base-example-dialog',
  templateUrl: './base-example-dialog.component.html',
  styleUrls: ['./base-example-dialog.component.scss']
})
export class BaseExampleDialogComponent {
  constructor(private dialogRef: MatDialogRef<BaseExampleDialogComponent>) {}

  close(color: string): void {
    this.dialogRef.close(color);
  }
}

import { Component } from '@angular/core';
import { BaseExampleDialogComponent } from './base-example-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-base-dialog',
  templateUrl: './base-dialog.component.html',
  styleUrls: ['./base-dialog.component.scss']
})
export class BaseDialogComponent {
  result = '';

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(BaseExampleDialogComponent)
      .afterClosed()
      .subscribe(result => this.result = result);
  }
}

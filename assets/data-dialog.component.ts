import { Component } from '@angular/core';
import { DataExampleDialogComponent } from './data-example-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-data-dialog',
  templateUrl: './data-dialog.component.html',
  styleUrls: ['./data-dialog.component.scss']
})
export class DataDialogComponent {
  result = '';

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DataExampleDialogComponent, { data: { title: 'Choose one color'}})
      .afterClosed()
      .subscribe(result => this.result = result);
  }
}

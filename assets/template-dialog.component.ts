import { Component } from '@angular/core';
import { TemplateExampleDialogComponent } from './template-example-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-template-dialog',
  templateUrl: './template-dialog.component.html',
  styleUrls: ['./template-dialog.component.scss']
})
export class TemplateDialogComponent {
  result = '';

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(TemplateExampleDialogComponent, { height: '180px', width: '250px' })
      .afterClosed()
      .subscribe(result => this.result = result);
  }
}

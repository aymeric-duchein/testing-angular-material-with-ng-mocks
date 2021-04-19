import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DataExampleSheetComponent } from './data-example-sheet.component';

@Component({
  selector: 'app-data-bottom-sheet',
  templateUrl: './data-bottom-sheet.component.html',
  styleUrls: ['./data-bottom-sheet.component.scss']
})
export class DataBottomSheetComponent {
  result = '';

  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(DataExampleSheetComponent, { data: { title: 'Choose one color'}})
      .afterDismissed()
      .subscribe(result => this.result = result);
  }
}

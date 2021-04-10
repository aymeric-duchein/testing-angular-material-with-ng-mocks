import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BaseExampleSheetComponent } from './base-example-sheet.component';

@Component({
  selector: 'app-base-bottom-sheet',
  templateUrl: './base-bottom-sheet.component.html',
  styleUrls: ['./base-bottom-sheet.component.scss']
})
export class BaseBottomSheetComponent {
  result = '';

  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BaseExampleSheetComponent)
      .afterDismissed()
      .subscribe(result => this.result = result);
  }
}

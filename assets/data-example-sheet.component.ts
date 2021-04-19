import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-data-example-sheet',
  templateUrl: './data-example-sheet.component.html',
  styleUrls: ['./data-example-sheet.component.scss']
})
export class DataExampleSheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<DataExampleSheetComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: {title: string} ) {
  }

  dismiss(color: string): void {
    this.bottomSheetRef.dismiss(color);
  }
}

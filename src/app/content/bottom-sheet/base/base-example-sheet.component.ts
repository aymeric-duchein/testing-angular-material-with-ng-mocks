import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-base-example-sheet',
  templateUrl: './base-example-sheet.component.html',
  styleUrls: ['./base-example-sheet.component.scss']
})
export class BaseExampleSheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BaseExampleSheetComponent>) {}

  dismiss(color: string): void {
    this.bottomSheetRef.dismiss(color);
  }
}

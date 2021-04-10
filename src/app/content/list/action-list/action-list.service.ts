import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ActionListService {

  constructor(private snackBar: MatSnackBar) {}

  save(): void {
    this.snackBar.open('Saved');
  }

  undo(): void {
    this.snackBar.open('Undone');
  }
}

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-autocomplete',
  templateUrl: './simple-autocomplete.component.html',
  styleUrls: ['./simple-autocomplete.component.scss']
})
export class SimpleAutocompleteComponent {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  toggleDisabled(): void {
    this.myControl.disabled ? this.myControl.enable() : this.myControl.disable();
  }
}

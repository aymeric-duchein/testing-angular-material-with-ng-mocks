import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-base-bottom-sheet',
  templateUrl: './simple-autocomplete.component.html',
  styleUrls: ['./simple-autocomplete.component.scss']
})
export class SimpleAutocompleteComponent {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}

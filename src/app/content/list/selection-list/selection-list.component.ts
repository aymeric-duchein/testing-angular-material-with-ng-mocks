import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss']
})
export class SelectionListComponent {
  options: string[] = [
    'Barbarian',
    'Fighter',
    'Monk',
    'Paladin',
    'Ranger',
    'Rogue',
  ];
  formControl: FormControl = new FormControl([]);
}

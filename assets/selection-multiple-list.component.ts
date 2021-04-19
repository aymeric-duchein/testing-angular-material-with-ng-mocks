import { Component } from '@angular/core';

@Component({
  selector: 'app-selection-multiple-list',
  templateUrl: './selection-multiple-list.component.html',
  styleUrls: ['./selection-multiple-list.component.scss']
})
export class SelectionMultipleListComponent {
  options: string[] = [
    'Bard',
    'Cleric',
    'Druid',
    'Sorcerer',
    'Warlock',
    'Wizard',
  ];
  selected: string[] = [];
}

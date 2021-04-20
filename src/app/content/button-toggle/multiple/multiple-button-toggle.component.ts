import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multiple-button-toggle',
  templateUrl: './multiple-button-toggle.component.html',
  styleUrls: ['./multiple-button-toggle.component.scss']
})
export class MultipleButtonToggleComponent {
  fontStyleControl = new FormControl();
}

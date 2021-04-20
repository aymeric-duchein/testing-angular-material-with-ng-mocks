import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-button-toggle',
  templateUrl: './form-button-toggle.component.html',
  styleUrls: ['./form-button-toggle.component.scss']
})
export class FormButtonToggleComponent {
  fontStyleControl = new FormControl();
}

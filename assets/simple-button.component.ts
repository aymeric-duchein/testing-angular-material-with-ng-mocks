import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss']
})
export class SimpleButtonComponent {
  click = 0;

  increment(): void {
    this.click++;
  }
}

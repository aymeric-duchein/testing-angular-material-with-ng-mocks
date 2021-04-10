import { Component } from '@angular/core';
import { CONTENT_LIST } from './content/content.routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'Testing Angular Material with NgMocks';
  opened = true;
  links = CONTENT_LIST;

  headerBtnClicked(): void {
    this.opened = !this.opened;
  }
}

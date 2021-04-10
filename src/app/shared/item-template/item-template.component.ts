import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-template',
  templateUrl: './item-template.component.html',
  styleUrls: [ './item-template.component.scss' ]
})
export class ItemTemplateComponent {

  @Input() htmlFile = '';
  @Input() tsFile = '';
  @Input() specFile = '';

}

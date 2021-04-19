import { Component, OnInit } from '@angular/core';
import { ActionListService } from './action-list.service';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent {

  constructor(private actionListService: ActionListService) { }

  save(): void {
    this.actionListService.save();
  }

  undo(): void {
    this.actionListService.undo();
  }
}

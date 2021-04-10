import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionListComponent } from './action-list.component';
import { ActionListService } from './action-list.service';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ContainerComponent } from './container/container.component';
import { ItemTemplateModule } from '../../../shared/item-template/item-template.module';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '', component: ContainerComponent },
];


@NgModule({
  declarations: [ ActionListComponent, ContainerComponent ],
  providers: [ ActionListService ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatListModule,
    MatSnackBarModule,
    ItemTemplateModule,
    MatCardModule
  ]
})
export class ActionListModule { }

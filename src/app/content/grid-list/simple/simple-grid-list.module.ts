import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleGridListComponent } from './simple-grid-list.component';
import { ContainerComponent } from './container/container.component';
import { ItemTemplateModule } from '../../../shared/item-template/item-template.module';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

const routes: Routes = [
  { path: '', component: ContainerComponent },
];

@NgModule({
  declarations: [
    SimpleGridListComponent,
    ContainerComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ItemTemplateModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class SimpleGridListModule { }

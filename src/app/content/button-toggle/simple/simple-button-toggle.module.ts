import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleButtonToggleComponent } from './simple-button-toggle.component';
import { ContainerComponent } from './container/container.component';
import { ItemTemplateModule } from '../../../shared/item-template/item-template.module';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: '', component: ContainerComponent },
];

@NgModule({
  declarations: [
    SimpleButtonToggleComponent,
    ContainerComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ItemTemplateModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule
  ]
})
export class SimpleButtonToggleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModelButtonToggleComponent } from './ngModel-button-toggle.component';
import { ContainerComponent } from './container/container.component';
import { ItemTemplateModule } from '../../../shared/item-template/item-template.module';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ContainerComponent },
];

@NgModule({
  declarations: [
    NgModelButtonToggleComponent,
    ContainerComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ItemTemplateModule,
    MatCardModule,
    MatButtonToggleModule,
    FormsModule
  ]
})
export class NgModelButtonToggleModule {
}

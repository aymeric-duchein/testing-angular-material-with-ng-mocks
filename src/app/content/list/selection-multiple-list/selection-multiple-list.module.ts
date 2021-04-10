import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionMultipleListComponent } from './selection-multiple-list.component';
import { MatListModule } from '@angular/material/list';
import { ContainerComponent } from './container/container.component';
import { ItemTemplateModule } from '../../../shared/item-template/item-template.module';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  { path: '', component: ContainerComponent },
];


@NgModule({
  declarations: [ SelectionMultipleListComponent, ContainerComponent ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatListModule,
    ItemTemplateModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule
  ]
})
export class SelectionMultipleListModule { }

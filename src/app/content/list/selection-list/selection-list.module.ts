import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionListComponent } from './selection-list.component';
import { MatListModule } from '@angular/material/list';
import { ContainerComponent } from './container/container.component';
import { ItemTemplateModule } from '../../../shared/item-template/item-template.module';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: '', component: ContainerComponent },
];


@NgModule({
  declarations: [ SelectionListComponent, ContainerComponent ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatListModule,
    ItemTemplateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class SelectionListModule { }

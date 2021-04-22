import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDialogComponent } from './data-dialog.component';
import { ContainerComponent } from './container/container.component';
import { ItemTemplateModule } from '../../../shared/item-template/item-template.module';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DataExampleDialogComponent } from './data-example-dialog.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  { path: '', component: ContainerComponent },
];

@NgModule({
  declarations: [
    DataDialogComponent,
    DataExampleDialogComponent,
    ContainerComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ItemTemplateModule,
    MatDialogModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class DataDialogModule { }

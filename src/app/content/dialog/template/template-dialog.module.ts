import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDialogComponent } from './template-dialog.component';
import { ContainerComponent } from './container/container.component';
import { ItemTemplateModule } from '../../../shared/item-template/item-template.module';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TemplateExampleDialogComponent } from './template-example-dialog.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  { path: '', component: ContainerComponent },
];

@NgModule({
  declarations: [
    TemplateDialogComponent,
    TemplateExampleDialogComponent,
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
export class TemplateDialogModule { }

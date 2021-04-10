import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseBottomSheetComponent } from './base-bottom-sheet.component';
import { ContainerComponent } from './container/container.component';
import { ItemTemplateModule } from '../../../shared/item-template/item-template.module';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { BaseExampleSheetComponent } from './base-example-sheet.component';
import { MatDividerModule } from '@angular/material/divider';

const routes: Routes = [
  { path: '', component: ContainerComponent },
];

@NgModule({
  declarations: [
    BaseBottomSheetComponent,
    BaseExampleSheetComponent,
    ContainerComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ItemTemplateModule,
    MatBottomSheetModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class BaseBottomSheetModule { }

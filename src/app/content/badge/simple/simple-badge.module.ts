import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleBadgeComponent } from './simple-badge.component';
import { ContainerComponent } from './container/container.component';
import { ItemTemplateModule } from '../../../shared/item-template/item-template.module';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: '', component: ContainerComponent },
];

@NgModule({
  declarations: [
    SimpleBadgeComponent,
    ContainerComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ItemTemplateModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule
  ]
})
export class SimpleBadgeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListComponent } from './nav-list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavListInfoService } from './nav-list.info.service';
import { ContainerComponent } from './container/container.component';
import { ItemTemplateModule } from '../../../shared/item-template/item-template.module';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MarkdownModule } from 'ngx-markdown';

const routes: Routes = [
  { path: '', component: ContainerComponent },
];

@NgModule({
  declarations: [ NavListComponent, ContainerComponent ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    ItemTemplateModule,
    MatCardModule,
    MarkdownModule
  ],
  providers: [
    NavListInfoService
  ],
})
export class NavListModule { }

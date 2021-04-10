import { NgModule } from '@angular/core';
import { BasicListComponent } from './basic-list.component';
import { MatListModule } from '@angular/material/list';
import { ContainerComponent } from './container/container.component';
import { ItemTemplateModule } from '../../../shared/item-template/item-template.module';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '', component: ContainerComponent },
];

@NgModule({
  declarations: [ BasicListComponent, ContainerComponent ],
  imports: [
    RouterModule.forChild(routes),
    MatListModule,
    ItemTemplateModule,
    MatCardModule
  ],
})
export class BasicListModule {
}

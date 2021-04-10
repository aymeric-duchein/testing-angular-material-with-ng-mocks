import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '', component: ListComponent, children: [
      { path: 'base', loadChildren: () => import(`./basic-list/basic-list.module`).then(m => m.BasicListModule) },
      { path: 'action', loadChildren: () => import(`./action-list/action-list.module`).then(m => m.ActionListModule) },
      { path: 'nav', loadChildren: () => import(`./nav-list/nav-list.module`).then(m => m.NavListModule) },
      { path: 'select', loadChildren: () => import(`./selection-list/selection-list.module`).then(m => m.SelectionListModule) },
      {
        path: 'multiSelect',
        loadChildren: () => import(`./selection-multiple-list/selection-multiple-list.module`).then(m => m.SelectionMultipleListModule)
      },
      { path: '', redirectTo: 'base', pathMatch: 'full' },
      { path: '**', redirectTo: 'base' },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatListModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [ ListComponent ],
})
export class ListModule {
}

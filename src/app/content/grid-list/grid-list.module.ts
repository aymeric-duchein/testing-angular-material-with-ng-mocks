import { NgModule } from '@angular/core';
import { GridListComponent } from './grid-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '', component: GridListComponent, children: [
      { path: 'simple', loadChildren: () => import(`./simple/simple-grid-list.module`).then(m => m.SimpleGridListModule) },
      { path: '', redirectTo: 'simple', pathMatch: 'full' },
      { path: '**', redirectTo: 'simple' },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes), MatButtonModule ],
  declarations: [ GridListComponent ],
})
export class GridListModule {}

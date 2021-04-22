import { NgModule } from '@angular/core';
import { DividerComponent } from './divider.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '', component: DividerComponent, children: [
      { path: 'simple', loadChildren: () => import(`./simple/simple-divider.module`).then(m => m.SimpleDividerModule) },
      { path: '', redirectTo: 'simple', pathMatch: 'full' },
      { path: '**', redirectTo: 'simple' },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes), MatButtonModule ],
  declarations: [ DividerComponent ],
})
export class DividerModule {}

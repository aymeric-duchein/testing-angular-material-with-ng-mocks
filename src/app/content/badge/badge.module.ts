import { NgModule } from '@angular/core';
import { BadgeComponent } from './badge.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '', component: BadgeComponent, children: [
      { path: 'simple', loadChildren: () => import(`./simple/simple-badge.module`).then(m => m.SimpleBadgeModule) },
      { path: '', redirectTo: 'simple', pathMatch: 'full' },
      { path: '**', redirectTo: 'simple' },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes), MatButtonModule ],
  declarations: [ BadgeComponent ],
})
export class BadgeModule {}

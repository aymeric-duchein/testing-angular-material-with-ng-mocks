import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '', component: CardComponent, children: [
      { path: 'simple', loadChildren: () => import(`./simple/simple-card.module`).then(m => m.SimpleCardModule) },
      { path: '', redirectTo: 'simple', pathMatch: 'full' },
      { path: '**', redirectTo: 'simple' },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes), MatButtonModule ],
  declarations: [ CardComponent ],
})
export class CardModule {}

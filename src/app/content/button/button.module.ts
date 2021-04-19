import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '', component: ButtonComponent, children: [
      { path: 'simple', loadChildren: () => import(`./simple/simple-button.module`).then(m => m.SimpleButtonModule) },
      { path: '', redirectTo: 'simple', pathMatch: 'full' },
      { path: '**', redirectTo: 'simple' },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes), MatButtonModule ],
  declarations: [ ButtonComponent ],
})
export class ButtonModule {}

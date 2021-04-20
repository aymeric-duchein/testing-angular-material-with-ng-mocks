import { NgModule } from '@angular/core';
import { ButtonToggleComponent } from './button-toggle.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '', component: ButtonToggleComponent, children: [
      { path: 'simple', loadChildren: () => import(`./simple/simple-button-toggle.module`).then(m => m.SimpleButtonToggleModule) },
      { path: 'ngmodel', loadChildren: () => import(`./ngModel/ngModel-button-toggle.module`).then(m => m.NgModelButtonToggleModule) },
      { path: 'form', loadChildren: () => import(`./form/form-button-toggle.module`).then(m => m.FormButtonToggleModule) },
      { path: 'multiple', loadChildren: () => import(`./multiple/multiple-button-toggle.module`).then(m => m.MultipleButtonToggleModule) },
      { path: '', redirectTo: 'simple', pathMatch: 'full' },
      { path: '**', redirectTo: 'simple' },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes), MatButtonModule ],
  declarations: [ ButtonToggleComponent ],
})
export class ButtonToggleModule {}

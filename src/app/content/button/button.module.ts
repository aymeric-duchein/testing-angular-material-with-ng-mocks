import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ButtonComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  declarations: [ ButtonComponent ],
})
export class ButtonModule {}

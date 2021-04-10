import { NgModule } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CheckboxComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  declarations: [ CheckboxComponent ],
})
export class CheckboxModule {}

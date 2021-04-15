import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsRouteActiveDirective } from './is-route-active.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ IsRouteActiveDirective ],
  exports: [
    IsRouteActiveDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class IsRouteActiveModule { }

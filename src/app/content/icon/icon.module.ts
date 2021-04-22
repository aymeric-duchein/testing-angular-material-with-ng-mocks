import { NgModule } from '@angular/core';
import { IconComponent } from './icon.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '', component: IconComponent, children: [
      { path: 'simple', loadChildren: () => import(`./simple/simple-icon.module`).then(m => m.SimpleIconModule) },
      { path: 'registry', loadChildren: () => import(`./registry/registry-icon.module`).then(m => m.RegistryIconModule) },
      { path: '', redirectTo: 'simple', pathMatch: 'full' },
      { path: '**', redirectTo: 'simple' },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes), MatButtonModule ],
  declarations: [ IconComponent ],
})
export class IconModule {}

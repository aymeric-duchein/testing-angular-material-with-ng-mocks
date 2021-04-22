import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '', component: DialogComponent, children: [
      { path: 'base', loadChildren: () => import(`./base/base-dialog.module`).then(m => m.BaseDialogModule) },
      { path: 'data', loadChildren: () => import(`./data/data-dialog.module`).then(m => m.DataDialogModule) },
      { path: 'template', loadChildren: () => import(`./template/template-dialog.module`).then(m => m.TemplateDialogModule) },
      { path: '', redirectTo: 'base', pathMatch: 'full' },
      { path: '**', redirectTo: 'base' },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes), MatButtonModule ],
  declarations: [ DialogComponent ],
})
export class DialogModule {}

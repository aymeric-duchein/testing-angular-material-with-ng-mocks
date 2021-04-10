import { NgModule } from '@angular/core';
import { BottomSheetComponent } from './bottom-sheet.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '', component: BottomSheetComponent, children: [
      { path: 'base', loadChildren: () => import(`./base/base-bottom-sheet.module`).then(m => m.BaseBottomSheetModule) },
      { path: 'data', loadChildren: () => import(`./data/data-bottom-sheet.module`).then(m => m.DataBottomSheetModule) },
      { path: '', redirectTo: 'base', pathMatch: 'full' },
      { path: '**', redirectTo: 'base' },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes), MatButtonModule ],
  declarations: [ BottomSheetComponent ],
})
export class BottomSheetModule {}

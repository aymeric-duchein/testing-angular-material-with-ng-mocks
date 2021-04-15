import { NgModule } from '@angular/core';
import { AutocompleteComponent } from './autocomplete.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '', component: AutocompleteComponent, children: [
      { path: 'simple', loadChildren: () => import(`./simple/simple-autocomplete.module`).then(m => m.SimpleAutocompleteModule) },
      { path: '', redirectTo: 'simple', pathMatch: 'full' },
      { path: '**', redirectTo: 'simple' },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes), MatButtonModule ],
  declarations: [ AutocompleteComponent ],
})
export class AutocompleteModule {}

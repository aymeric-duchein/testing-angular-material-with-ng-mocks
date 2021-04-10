import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTemplateComponent } from './item-template.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FileReaderModule } from '../file-reader/file-reader.module';



@NgModule({
  declarations: [ ItemTemplateComponent ],
  exports: [
    ItemTemplateComponent
  ],
  imports: [
    CommonModule,
    FileReaderModule,
    MatTabsModule
  ]
})
export class ItemTemplateModule { }

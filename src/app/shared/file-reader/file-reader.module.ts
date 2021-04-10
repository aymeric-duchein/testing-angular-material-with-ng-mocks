import { NgModule } from '@angular/core';
import { FileReaderComponent } from './file-reader.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    FileReaderComponent,
  ],
  imports: [ MarkdownModule.forChild() ],
  exports: [ FileReaderComponent ]
})
export class FileReaderModule {
  constructor() {
  }
}

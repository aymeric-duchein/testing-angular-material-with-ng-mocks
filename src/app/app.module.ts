import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ContentRoutingModule } from './content/content.routing.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FileReaderModule } from './shared/file-reader/file-reader.module';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ContentRoutingModule,
    FileReaderModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

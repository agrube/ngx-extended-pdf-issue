import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { IframeComponent } from './iframe/iframe.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { PdfButtonComponent } from './pdf-button/pdf-button.component';

@NgModule({
  declarations: [
    AppComponent,
    IframeComponent,
    PdfViewerComponent,
    PdfButtonComponent
  ],
  imports: [
    BrowserModule,
    NgxExtendedPdfViewerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

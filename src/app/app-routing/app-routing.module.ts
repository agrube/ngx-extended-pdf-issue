import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { IframeComponent } from '../iframe/iframe.component';
import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: IframeComponent
  },
  {
    path: 'viewer',
    component: PdfViewerComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

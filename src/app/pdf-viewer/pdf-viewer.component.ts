import { AfterContentInit, Component, Renderer2 } from '@angular/core';
import { PageRenderedEvent, PagesLoadedEvent } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements AfterContentInit {
  public title = 'issue';
  public height = 'calc(50vh - 120px)';

  public zoomProperty: any = '';
  public showSideBar = false;
  public pageNumber: number = 0;

  constructor(private renderer: Renderer2) {}

  public ngAfterContentInit(): void {
    const toolbar = document.getElementsByClassName('zoom')[0];
    if (toolbar) {
      const top = 8 + toolbar.getBoundingClientRect().top;
      this.height = `calc(100vh - ${top}px)`;
    }
  }

  pdfLoaded(): void {
    console.log('PDF Loaded');
  }

  pagesLoaded(evt: PagesLoadedEvent): void {
    console.log('Loaded');
  }

  pageRendered(evt: PageRenderedEvent): void {
    console.log('Rendered');
  }
}

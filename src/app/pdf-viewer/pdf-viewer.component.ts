import { AfterContentInit, Component, ComponentFactoryResolver, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { PageRenderedEvent, PagesLoadedEvent } from 'ngx-extended-pdf-viewer';
import { PdfButtonComponent } from '../pdf-button/pdf-button.component';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements AfterContentInit {

  @ViewChild('injectContainer', { read: ViewContainerRef, static: true }) injectContainer!: ViewContainerRef;

  public title = 'issue';
  public height = 'calc(50vh - 120px)';
  public pdfSrc = 'assets/working-file.pdf';

  private parentElem: HTMLDivElement;

  constructor(private renderer: Renderer2, private componentFactoryResolver: ComponentFactoryResolver) { }

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
    const wrapper = evt.source.div.querySelector('.canvasWrapper');
    this.parentElem = this.renderer.createElement('div') as HTMLDivElement;
    this.renderer.addClass(this.parentElem, 'pdf-form-overlay');
    this.renderer.setAttribute(this.parentElem, 'id', 'pdf-form-overlay-element-' + evt.pageNumber);
    this.renderer.appendChild(wrapper, this.parentElem);

    const buttonComponent = this.componentFactoryResolver.resolveComponentFactory(PdfButtonComponent);
    const buttonComponentRef = this.injectContainer.createComponent(buttonComponent);
    buttonComponentRef.instance.parent = this.parentElem;
    buttonComponentRef.instance.clicked.subscribe(() => {
      console.log('Clicked!');
    })
  }

  swap(): void {
    if (this.pdfSrc === 'assets/working-file.pdf') {
      this.pdfSrc = 'assets/busted-file.pdf';
    } else {
      this.pdfSrc = 'assets/working-file.pdf';
    }
  }
}

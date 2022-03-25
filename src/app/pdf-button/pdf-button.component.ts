import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pdf-button',
  templateUrl: './pdf-button.component.html',
  styleUrls: ['./pdf-button.component.css']
})
export class PdfButtonComponent implements AfterViewInit {

  @Input() parent: HTMLDivElement;

  @Output() clicked = new EventEmitter<void>();

  @ViewChild('buttonContainer') container!: ElementRef;


  constructor(private renderer: Renderer2) { }


  ngAfterViewInit(): void {
    this.renderer.appendChild(this.parent, this.container.nativeElement);
  }

  onClick(): void {
    this.clicked.emit();
  }

}

import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { 
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'grey');
  }

  @HostListener('mouseenter') onHover() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'grey');
  }
}

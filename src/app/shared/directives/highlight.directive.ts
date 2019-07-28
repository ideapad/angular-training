import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor : string;  

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') OnMouseEnter() {
    this.backgroundColor =  this.highlightColor || 'lightgreen';
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.backgroundColor = null;
  }
}

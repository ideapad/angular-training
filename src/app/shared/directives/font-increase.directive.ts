import { Directive, HostListener, HostBinding, Input, Renderer2, ElementRef } from '@angular/core';
import { registerLocaleData } from '@angular/common';

@Directive({
  selector: '[font-increase]'
})
export class FontIncreseDirective {
    constructor(private renderer: Renderer2, private el: ElementRef) {}

    @Input('font-increase') textSize : string;  

    @HostListener('click') OnClick() {
        this.renderer.setStyle(this.el, 'font-size', this.textSize + 'px');
    }
}

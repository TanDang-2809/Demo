import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[AppBold]'
})
export class BoldDirective {

  constructor(private element: ElementRef, private render: Renderer2) { 
    // element.nativeElement.style.color = 'red';
    //trả về cái thẻ và thiết lập màu cho thẻ đó
    render.setStyle(element.nativeElement, 'color', 'white');
    render.setStyle(element.nativeElement, 'background', 'red');
  }
}

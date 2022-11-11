import {Directive, DoCheck, ElementRef, HostListener, inject, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[ceStyles]'
})
export class StylesDirective implements DoCheck {
  @Input('ceStyles') styles: Record<string, boolean >

  private renderer = inject(Renderer2);
  private hostElement = inject(ElementRef);

  @HostListener('click')
  handleClick() {
    console.log('Item Clicked')
  }

  ngDoCheck(): void {
     const nativeElement = this.hostElement.nativeElement;

      for (let key in this.styles) {
        if (this.styles[key] === true) {
          this.renderer.addClass(nativeElement, key);
        }
        else {
          this.renderer.removeClass(nativeElement, key);
        }
      }
  }
}

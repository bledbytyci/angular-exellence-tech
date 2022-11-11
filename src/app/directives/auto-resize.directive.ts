import {Directive, DoCheck, ElementRef, HostBinding, HostListener, inject, Input, Renderer2} from '@angular/core';

@Directive({
  selector: 'textarea',
 })
export class AutoResizeDirective {
  // @Input('ceAutoResize') autoResizable: boolean = true;
  textarea = inject(ElementRef).nativeElement;
  renderer = inject(Renderer2);


  @HostBinding('style')
  defaultStyles = {overflow: 'hidden', height: 'auto', resize: 'none'}

  @HostListener('input')
  resize() {
    this.textarea.style.height = 'inherit'; // reset height
    const computed = window.getComputedStyle(this.textarea); // current styles

    // calculate height
    const height = parseInt(computed.getPropertyValue('border-top-width'), 10) +
      parseInt(computed.getPropertyValue('padding-top'), 10) +
      this.textarea.scrollHeight +
      parseInt(computed.getPropertyValue('padding-bottom'), 10) +
      parseInt(computed.getPropertyValue('border-bottom-width'), 10);

    this.textarea.style.height = height + 'px';
  }

}

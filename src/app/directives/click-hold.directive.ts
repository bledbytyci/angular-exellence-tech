import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[click.hold]'
})
export class ClickHoldDirective {
  private clickTimer: number;

  @Output('click.hold')
  holdClickEvent = new EventEmitter();

  @HostListener('mousedown')
  onMouseDown() {
    this.clickTimer = window.setInterval(() => {
      this.holdClickEvent.emit()
    }, 2000);
  }

  @HostListener('mouseup')
  cancelTimer () {
    clearInterval(this.clickTimer)
  }
}

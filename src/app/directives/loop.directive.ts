import {Directive, DoCheck, EnvironmentInjector, inject, Input, ViewContainerRef} from '@angular/core';
import {ChildComponent} from "../child.component";

@Directive({
  selector: '[ceLoop]'
})
export class LoopDirective implements DoCheck {
  @Input('ceLoop') items: any [];

  private vcr = inject(ViewContainerRef);
  private envInjector = inject(EnvironmentInjector);

  public ngDoCheck(): void {
    this.vcr.clear();
    this.items.map(color => {
      const childComponent = this.vcr.createComponent(ChildComponent, {environmentInjector: this.envInjector})
      childComponent.setInput('color', color);
    });

     const red = this.vcr.get(0);
     this.vcr.move(red,2);
  }
 }

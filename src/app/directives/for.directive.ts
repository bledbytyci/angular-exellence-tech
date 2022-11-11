import {Directive, DoCheck, inject, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ceFor]'
})
export class ForDirective implements DoCheck{
  @Input('ceForThenRender') templateToRender: TemplateRef<any>;
  @Input('ceForWithin') collection: any[];
  @Input('ceForUnless') flag: boolean;

  private vcr = inject(ViewContainerRef);
  private templateRef = inject(TemplateRef);

  ngDoCheck() {
    this.vcr.clear();

    if (this.flag) {
      this.collection.forEach((item, i) => (
        this.vcr.createEmbeddedView(this.templateRef, {
          $implicit: item,
          index: i
        })
      ))
    }else {
      this.vcr.createEmbeddedView(this.templateToRender)
    }
  }
}

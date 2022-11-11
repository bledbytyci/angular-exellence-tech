import {
  AfterViewInit,
  Component, ComponentRef,
  createComponent,
  ElementRef, EnvironmentInjector,
  inject,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ChildComponent} from './child.component';
import {StylesDirective} from './directives/styles.directive';
import {TaskService} from './task.service';
import {AutoResizeDirective} from "./directives/auto-resize.directive";
import {Card, CardTypes} from "./card/card.type";

@Component({
  selector: 'app-root',
  styles: [`
    .danger {
      color: red;
    }
  `],
  template: `
    <div>
      <!--2.1 View Child Selector    -->
      <h1 #templateRef [ceStyles]="styles">Hello from Celonis</h1>
      <!--            <ce-child></ce-child>-->


      <!--  2.2 Renderer Object    -->
      <!--      <h1 [ceStyles]="styles">Renderer Works</h1>-->

      <!--  2.3 Auto Resize example    -->
      <textarea autoResize></textarea>


      <!--  2.5 Click and hold directive   -->
      <div>
        <button (click.hold)="onClick()">{{name}}</button>
        <button (keydown.enter)="onClick()">test</button>
      </div>

      <!-- 2.4 View ref container/dynamic components   -->
      <ce-child [ceLoop]="this.colors"></ce-child>


      <!-- 2.6 Micro Syntax CeFor Example -->
      <ul>
        <li *ceFor="let c within colors unless !flag thenRender otherTemplate">{{c}}</li>
      </ul>

      <ng-template #otherTemplate>
        Other Template
      </ng-template>

      <!--  2.7 Cards example    -->
            <ng-container *cardDeck="let card for cards"></ng-container>
    </div>
  `,
})
export class AppComponent implements AfterViewInit {
  private vcr = inject(ViewContainerRef);
  private envInjector = inject(EnvironmentInjector);

  styles = {'danger': true};
  colors: string[] = ['red', 'green', 'blue'];
  name = 'Click button';
  flag = true;

  onClick() {
    console.log('test')
    this.name = 'Clicked'
  }

  // Ways to query an element on our host view
  // by templateRef
  @ViewChild('templateRef') title: ElementRef;

  // by refence of class
  @ViewChild(ChildComponent) child: ChildComponent;

  // by reference of class query the element
  @ViewChild(ChildComponent, {read: ElementRef}) childElRef: ElementRef;

  // by reference of directive query the element
  @ViewChild(StylesDirective) h1: StylesDirective;

  // by reference of Service that the child uses;
  @ViewChild(TaskService) whatAmI: TaskService;

  // fetch the viewContainer of an item
  @ViewChild(TaskService, {read: ViewContainerRef}) titleVcr: ViewContainerRef;


  public ngAfterViewInit(): void {
    console.log('View Container Ref', this.vcr);
    console.log('Title', this.title);
    console.log('Child', this.child)
    console.log('ChildRef', this.childElRef)
    console.log('Textarea', this.h1)
    console.log('What am I?', this.whatAmI)

    // Dynamic components
    // this.generateChildComponentDynamically();
  }


  // Cards example
  cards: Card[] = [
    {
      type: CardTypes.Plain,
      title: "The title",
      text: "The Text"
    },
    {
      type: CardTypes.Plain,
      title: "Another title",
      text: "another text to render"
    },
    {
      type: CardTypes.Primary,
      title: "What else",
      text: "Lorem Ipsum dolorem",
    },
  ];


  generateChildComponentDynamically() {
    // creating a component
    const childComp: ComponentRef<ChildComponent> = createComponent(ChildComponent, {environmentInjector: this.envInjector});
    this.vcr.insert(childComp.hostView);
  }
}


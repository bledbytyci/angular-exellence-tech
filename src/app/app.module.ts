import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { StylesDirective } from './directives/styles.directive';
import { AutoResizeDirective } from './directives/auto-resize.directive';
import { ClickHoldDirective } from './directives/click-hold.directive';
import { LoopDirective } from './directives/loop.directive';
import { ForDirective } from './directives/for.directive';
import {CardDeckDirective} from "./card/card.directive";
import {CardsComponent} from "./card/card-template.component";

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    StylesDirective,
    AutoResizeDirective,
    ClickHoldDirective,
    LoopDirective,
    ForDirective,
    CardDeckDirective,
    CardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypographComponent} from './typograph.component';
import {RouterModule} from "@angular/router";
import {routes} from "./typograph.routing";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    TypographComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule
  ]
})
export class TypographModule {
}

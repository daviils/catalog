import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./home.routing";
import {MatButtonModule} from "@angular/material/button";
import {MaterialModule} from "../material/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MaterialModule,
  ]
})
export class HomeModule {
}

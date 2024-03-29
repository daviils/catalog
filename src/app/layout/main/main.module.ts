import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {routes} from "./main.routing";
import {MainComponent} from "./main.component";
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggle, MatButtonToggleModule} from "@angular/material/button-toggle";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {httpTranslateLoader} from "../../app.module";
import {HttpClient} from "@angular/common/http";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatBadgeModule} from "@angular/material/badge";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatBadgeModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: TranslateLoader,
      useFactory: httpTranslateLoader,
      deps: [HttpClient]
    },
    TranslateService
  ]
})
export class MainModule {
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseComponent} from "../../core/base.component";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {MatSidenav} from "@angular/material/sidenav";

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends BaseComponent implements OnInit {
  @ViewChild('sidenav') _sidenav!: MatSidenav;
  language = super.accessLanguage.length === 0 ? 'pt-BR' : super.accessLanguage;

  constructor(public router: Router,
              public translate: TranslateService) {
    super(router, translate)
    translate.addLangs(['en-US', 'es-ES', 'pt-BR']);
    super.handlerCultureLanguage(this.language);
  }

  ngOnInit(): void {
    super.handlerCultureLanguage(this.language);
  }

  handlerMode(event: any) {
    $('#mode').toggleClass('dark-mode')
  }

  close() {
    this._sidenav.close();
  }
}

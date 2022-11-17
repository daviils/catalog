import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../core/base.component";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent extends BaseComponent implements OnInit {

  constructor(public router: Router,
              public translate: TranslateService) {
    super(router, translate)
  }

  ngOnInit(): void {
  }

}

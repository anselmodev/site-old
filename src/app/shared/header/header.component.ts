import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
// import * as $ from 'jquery';

import { PreloaderService } from '../../core/service/preloader.service';


@Component({
  selector: 'cip-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  logoHeader: Boolean   = false;
  borderHeader: Boolean = false;
  customerLink: any     = 'cip--float-left';

  constructor(private _router: Router, private _prealoderServ: PreloaderService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this._prealoderServ.sectionRequest.subscribe(sectionRes => {
        if (this._router.url !== '/') {
          this.borderHeader = true;
          this.logoHeader   = true;
          this.customerLink = 'cip--float-right';
        } else {
          this.borderHeader = false;
          this.logoHeader   = false;
          this.customerLink = 'cip--float-left';
        }
    });
  }

  linkNavigation(linkTo) {
    this._prealoderServ.setSectionRouter({
      sectionRouter: linkTo,
      preloader: 'close'
    });
  }

}

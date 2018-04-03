import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

// import * as $ from 'jquery';

import { PreloaderService } from '../../core/service/preloader.service';
import { Preloader } from '../../core/animation/preloader.animation';


@Component({
  selector: 'cip-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sectionWatch: any;

  constructor(private _prealoderServ: PreloaderService) {}

  ngOnInit() { }

  linkNavigation(linkTo) {
    this._prealoderServ.setSectionRouter({
      sectionRouter: linkTo,
      preloader: 'close'
    });
  }

}

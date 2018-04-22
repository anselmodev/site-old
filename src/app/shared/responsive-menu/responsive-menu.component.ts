import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as $ from 'jquery';

import { PreloaderService } from '../../core/service/preloader.service';
import { ResponsiveMenuAnimation } from '../../core/animation/responsive-menu.animation';
import { menuItensResponsive } from '../../core/mockup/menu.mockup';

@Component({
  selector: 'cip-responsive-menu',
  templateUrl: './responsive-menu.component.html',
  styleUrls: ['./responsive-menu.component.scss']
})
export class ResponsiveMenuComponent implements OnInit {
  pageName: any;
  menuItems: any = menuItensResponsive;

  constructor(private _router: Router, private _prealoderServ: PreloaderService) { }

  ngOnInit() {
    // Get Page Name
    this._prealoderServ.sectionRequest.subscribe(sectionRes => {
      this.pageName = sectionRes['sectionRouterName'];
    });

  }

  // Router Navigation
  linkNavigation(linkTo) {
    this.closeMenu();
    this._prealoderServ.setSectionRouter({
      sectionRouter: linkTo,
      preloader: 'close'
    });
  }

  // Close Menu
  closeMenu() {
    ResponsiveMenuAnimation.close();
  }
}

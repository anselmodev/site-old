import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { WindowResize } from '../../core/utility/windowsize.utility';
import { PreloaderService } from '../../core/service/preloader.service';
import { ResponsiveMenuAnimation } from '../../core/animation/responsive-menu.animation';
import { menuItensHeader } from '../../core/mockup/menu.mockup';

@Component({
  selector: 'cip-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  menuItems: any = menuItensHeader;
  logoHeader: Boolean = false;
  borderHeader: Boolean = false;
  customerLink: any = 'cip--float-left';
  menuHamb: String = 'fa fa-bars';
  linkActive: any;

  constructor(private _router: Router, private _prealoderServ: PreloaderService) {}

  ngOnInit() {
    this._prealoderServ.sectionRequest.subscribe(sectionRes => {
      if (this._router.url !== '/') {
        this.borderHeader = true;
        this.logoHeader   = true;
        this.customerLink = 'cip--float-right';
        $('.cip_responsive_btn_home').show();
      } else {
        this.borderHeader = false;
        this.logoHeader   = false;
        this.customerLink = 'cip--float-left';
        $('.cip_responsive_btn_home').hide();
      }
      this.linkActive = sectionRes.sectionRouterName;
    });

    // Check Windo Size
    const win = $(window),
      closeM = () => {
        ResponsiveMenuAnimation.close();
      };
    win.resize(() => {
      clearTimeout($.data(this, 'windowCheck'));
      $.data(this, 'windowCheck', setTimeout(function () {
        if (WindowResize.get('w') > 576) {
          // Ocultar Menu
          closeM();
        }
      }, 250));
    });
  }

  ngAfterViewInit() {}

  linkNavigation(linkTo) {
    this._prealoderServ.setSectionRouter({
      sectionRouter: linkTo,
      preloader: 'close'
    });
  }

  openMenu() {
    ResponsiveMenuAnimation.open();
  }

}

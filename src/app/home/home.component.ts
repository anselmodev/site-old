import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import * as $ from 'jquery';

import { PreloaderService } from '../core/service/preloader.service';

@Component({
  selector: 'cip-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  titlePage: any = 'Aplicações Mobile, Sites, E-commerce e Sistemas - CodeInPixel';
  logoId: String = 'cip_logo_home';
  pixels_home    = [
    '_hpp1', '_hpp2 _hpp_wh1', '_hpp3 _hpp_wh1', '_hpp4 _hpp_wh2', '_hpp5 _hpp_wh2', '_hpp6 _hpp_wh2',
    '_hpp7 _hpp_wh2', '_hpp8 _hpp_wh3', '_hpp9 _hpp_wh3', '_hpp10 _hpp_wh4', '_hpp11 _hpp_wh4'
   ];
  showArticleHome: Boolean = true;
  sloganHome: Boolean = true;

  constructor(private _router: Router, private titleService: Title, private meta: Meta, private _prealoderServ: PreloaderService) {
    this.meta.updateTag({ name: 'description', content: 'Aplicações Mobile, Sites, E-commerce e Sistemas - CodeInPixel Studios' });
    this.meta.updateTag({ name: 'keywords', content: 'Aplicativos Mobile, Sites, E-commerce, Aplicativos Desktop, Sistemas' });
    this.meta.updateTag({ name: 'author', content: 'CodeInPixel Studios' });

    $('.dash_preloader').fadeOut();
  }

  ngOnInit() {
    if (!this.showArticleHome) {
      $('body, .cip_main').css('height', '100%');
    }
    this.titleService.setTitle(this.titlePage);
    this.linkNavigationName('Home');
  }

  ngAfterViewInit() {
    if (this._router.url !== '/') {
      this.sloganHome = false;
    } else {
      this.sloganHome = true;
    }
  }

  linkNavigationName(linkName) {
    this._prealoderServ.setSectionRouter({
      sectionRouterName: linkName
    });
  }

}

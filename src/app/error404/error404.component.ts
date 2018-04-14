import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as $ from 'jquery';

import { PreloaderService } from '../core/service/preloader.service';
import { menuSections } from '../core/mockup/error404.mpckup';

@Component({
  selector: 'cip-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {
  titlePage: any = 'Página Não Encontrada - CodeInPixel';
  sections: any = menuSections;
  constructor(
    private titleService: Title,
    private meta: Meta,
    private _prealoderServ: PreloaderService
  ) {
    this.meta.updateTag({ name: 'description', content: 'Desculpe, página requisitada não existe! - CodeInPixel Studios' });
    this.meta.updateTag({ name: 'keywords', content: 'Aplicativos Mobile, Sites, E-commerce, Aplicativos Desktop, Sistemas' });
    this.meta.updateTag({ name: 'author', content: 'CodeInPixel Studios' });
  }

  ngOnInit() {
    // Remove height: 100%; from body
    $('body, .cip_main').css('height', 'auto');
    this.titleService.setTitle(this.titlePage);
    this.linkNavigationName('Erro 404');
  }

  // Router Navigation
  linkNavigation(linkTo) {
    this._prealoderServ.setSectionRouter({
      sectionRouter: linkTo,
      preloader: 'close'
    });
  }

  linkNavigationName(linkName) {
    this._prealoderServ.setSectionRouter({
      sectionRouterName: linkName
    });
  }

}

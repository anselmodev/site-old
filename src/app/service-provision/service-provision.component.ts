import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as $ from 'jquery';

import { PreloaderService } from '../core/service/preloader.service';

@Component({
  selector: 'cip-service-provision',
  templateUrl: './service-provision.component.html',
  styleUrls: ['./service-provision.component.scss']
})
export class ServiceProvisionComponent implements OnInit {
  titlePage: any = 'Serviços e Tecnologias - CodeInPixel Studios';
  titlePageContent: any = 'Prestação de Serviços, Linguagens e Tecnologias com Qual Trabalho';

  constructor(
    private titleService: Title,
    private meta: Meta,
    private _prealoderServ: PreloaderService
  ) {
    this.meta.updateTag({ name: 'description', content: 'Prestação de Serviços, Linguagens e Tecnologias - CodeInPixel Studios' });
    this.meta.updateTag({ name: 'keywords', content: 'Serviços de TI, Desenvolvimento, Developer, Full Stack, App Mobile, Aplicações' });
    this.meta.updateTag({ name: 'author', content: 'CodeInPixel Studios' });
  }

  ngOnInit() {
    // Remove height: 100%; from body
    $('body, .cip_main').css('height', 'auto');
    this.titleService.setTitle(this.titlePage);
    this.linkNavigationName('Serviços e Tecnologias');
  }

  // Router Navigation
  // linkNavigation(linkTo) {
  //   this._prealoderServ.setSectionRouter({
  //     sectionRouter: linkTo,
  //     preloader: 'close'
  //   });
  // }

  linkNavigationName(linkName) {
    this._prealoderServ.setSectionRouter({
      sectionRouterName: linkName
    });
  }

}

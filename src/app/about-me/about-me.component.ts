import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { PreloaderService } from '../core/service/preloader.service';
import { Preloader } from '../core/animation/preloader.animation';

@Component({
  selector: 'cip-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  sectionWatch: any;
  titlePage:    any = 'Sobre Mim, Desenvolvedor - CodeInPixel';

  constructor(private titleService: Title, private meta: Meta, private _prealoderServ: PreloaderService) {
    this.meta.updateTag({ name: 'description', content: 'Sobre Mim: Anselmo Lima, Fullstack Developer - CodeInPixel Studios' });
    this.meta.updateTag({ name: 'keywords', content: 'Perfil, Anselmo Lima, Fullstack Developer, Designer, MEAN Stack,' });
    this.meta.updateTag({ name: 'author', content: 'CodeInPixel Studios' });
  }

  ngOnInit() {
    this.titleService.setTitle(this.titlePage);
  }

  linkNavigation(linkTo) {
    this._prealoderServ.setSectionRouter({
      sectionRouter: linkTo,
      preloader: 'close'
    });
  }

}

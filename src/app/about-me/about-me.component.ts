import {Component, ElementRef, OnInit} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as $ from 'jquery';

import { PreloaderService } from '../core/service/preloader.service';

@Component({
  selector: 'cip-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  titlePage:    any = 'Sobre Mim, Desenvolvedor - CodeInPixel';
  items = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 10];

  constructor(private titleService: Title, private meta: Meta, private _prealoderServ: PreloaderService) {
    this.meta.updateTag({ name: 'description', content: 'Sobre Mim - Anselmo Lima, Fullstack Developer - CodeInPixel Studios' });
    this.meta.updateTag({ name: 'keywords', content: 'Perfil, Anselmo Lima, Fullstack Developer, Designer, MEAN Stack,' });
    this.meta.updateTag({ name: 'author', content: 'CodeInPixel Studios' });
  }

  ngOnInit() {
    $( document ).scroll(function() {

      clearTimeout( $.data( this, 'scrollCheck' ) );
      $.data( this, 'scrollCheck', setTimeout(function() {
        console.log('stop');
      }, 250) );

    });
    $('body, .cip_main').css('height', 'auto');
    this.titleService.setTitle(this.titlePage);
    this.linkNavigationName('Sobre Mim');
  }

  linkNavigationName(linkName) {
    this._prealoderServ.setSectionRouter({
      sectionRouterName: linkName
    });
  }

}

import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

import { UserAgent } from '../../core/utility/user-agent.utility';
import { PreloaderService } from '../../core/service/preloader.service';
import { BackgroundAnimation } from '../../core/animation/pixels.animation';
import {
  bgPixelsHome, bgPixelsAbout, bgPixelsServices, bgPixelsWorks, bgPixelsContact, bgPixels404
} from '../../core/mockup/images-bgpixel.mockup';

@Component({
  selector: 'cip-bg-pixel',
  templateUrl: './bg-pixel.component.html',
  styleUrls: ['./bg-pixel.component.scss']
})
export class BgPixelComponent implements OnInit, AfterViewInit {
  @Input() sectionImages: any;

  getImagesSection: any = null;
  getOsUser: any = UserAgent.get('os', 'name');
  timerFadeBg = null;

  constructor(private _prealoderServ: PreloaderService) {}

  ngOnInit() {
    // BG Pixels
    this._prealoderServ.sectionRequest.subscribe(sectionRes => {
      if (sectionRes.sectionRouterName !== undefined) {
        clearInterval(this.timerFadeBg);
        this.timerFadeBg = null;

        let lastImg = 0;
        switch (sectionRes.sectionRouterName) {
          case 'Sobre Mim':
            this.getImagesSection = bgPixelsAbout;
            clearInterval(this.timerFadeBg);
            this.timerFadeBg = setInterval(() => {
              const bgFade = Math.floor(Math.random() * 5);

              if (bgFade !== lastImg) {
                $('#bgPixel2>img').fadeOut('fast');
                $(`#imageBg_${bgFade}`).fadeIn('fast');
                lastImg = bgFade;
              }
            }, 4000);

            break;
          case 'Serviços e Tecnologias':
            this.getImagesSection = bgPixelsServices;
            break;
          case 'Trabalhos e Projetos':
            this.getImagesSection = bgPixelsWorks;
            break;
          case 'Fale Comigo':
            this.getImagesSection = bgPixelsContact;
            break;
          case 'Erro 404':
            this.getImagesSection = bgPixels404;
            break;
          default:
            this.getImagesSection = bgPixelsHome;
            break;
        }
      }
    });
    if (
      this.getOsUser === 'macosx' ||
      this.getOsUser === 'windows' ||
      this.getOsUser === 'linux'
    ) {
      BackgroundAnimation.init();
    }
  }

  ngAfterViewInit() {
    if (
      this.getOsUser === 'macosx' ||
      this.getOsUser === 'windows' ||
      this.getOsUser === 'linux'
    ) {
      const DOC = $(document);
      let scrollStart = false;
      DOC.scroll(function () {
        if (!scrollStart) {
          scrollStart = true;
          BackgroundAnimation.start();
        }

        clearTimeout($.data(this, 'scrollCheck'));
        $.data(this, 'scrollCheck', setTimeout(function () {
          scrollStart = false;
          BackgroundAnimation.stop();
        }, 250));
      });
    }
  }

}

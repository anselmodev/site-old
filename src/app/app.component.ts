import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';

import { PreloaderService } from './core/service/preloader.service';
import { CounterService } from './core/service/counter.service';
import { Preloader } from './core/animation/preloader.animation';
import { LogoAnimation } from './core/animation/logo.animation';

@Component({
  selector: 'cip-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,  AfterViewInit {
  logoId: String = 'cip_logo_home';
  sectionWatch: any;

  constructor(
    private _counter: CounterService,
    private _router: Router,
    private _prealoderServ: PreloaderService
  ) {
    // Couter
    this._counter.execCounter();
  }

  ngOnInit() {
    this._prealoderServ.sectionRequest.subscribe(sectionRes => {
      this.sectionWatch = sectionRes;
      // Ações da seção
      this.setRouter();
    });
    console.log('🚀 Codificado com carinho por: Anselmo Lima - https://codeinpixel.com/sobre-mim');
  }

  ngAfterViewInit() {
    // Router Event
    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Ao Iniciar navegação
      } else if ( event instanceof NavigationEnd || event instanceof NavigationCancel ) {
        // Navegação Router Finalizada
        Preloader.open({
          action: () => {
            // Somente na pagina home
            if (this._router.url === '/') {
              this.logoHome('show');
            }
          }
        });
      }
    });
  }

  // Acionar Animação Logo
  actionLogoHome(event) {
    this.logoHome(event.logo);
  }

  // Animar Logotipo Home e Exibir conte o home
  logoHome(type) {
    LogoAnimation.init(this.logoId, .8, 'true');
    if (type === 'show') {
      LogoAnimation.show();
      setTimeout(() => {
        $('._home_wait').hide();
        $('._home_slogan, ._home_news').fadeIn('fast');
      }, 2500);
    } else if (type === 'hide') {
      LogoAnimation.hide();
    }
  }

  // Play/Pause Animação Logo Shine
  actionLogoHomeShine(event) {
    LogoAnimation.shine(event);
  }

  // Ir para a rota definida e executar ações
  setRouter() {
    if (this.sectionWatch.preloader === 'close') {
      const checkCurrentSection = this._router.url.replace('/', '');

      if (this.sectionWatch.sectionRouter !== checkCurrentSection) {
        if (this._router.url === '/') {
            this.actionLogoHomeShine('stop');
        }
        Preloader.close({
          currentSection: this._router.url,
          action: () => {
            this._router.navigate([this.sectionWatch.sectionRouter]);
          }
        });
      }
    }
  }
}

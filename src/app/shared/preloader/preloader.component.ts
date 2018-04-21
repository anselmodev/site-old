import { Component, OnInit, AfterViewInit } from '@angular/core';

import { PreloaderService } from '../../core/service/preloader.service';
import { LogoPreloderAnimation } from '../../core/animation/logo-preloader.animation';

@Component({
  selector: 'cip-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit, AfterViewInit {
  logoId: String = 'cip_logo_preloader';
  stopAnimation: any;
  repeatAnimation: any = null;
  constructor(private _prealoderServ: PreloaderService) {}

  ngOnInit() {
    // this._prealoderServ.sectionRequest.subscribe(sectionRes => {
    //   console.log('Preloader - Seção:', sectionRes);
    //   this.pageName = sectionRes['sectionRouterName'];
    // });
  }

  ngAfterViewInit() {
    LogoPreloderAnimation.init(this.logoId, .7);
    LogoPreloderAnimation.play();
  }

  logoAnimate(type) {
    if (type === 'play') {
        LogoPreloderAnimation.play();
    }
    if (type === 'stop') {
      LogoPreloderAnimation.stop();
    }
  }

}

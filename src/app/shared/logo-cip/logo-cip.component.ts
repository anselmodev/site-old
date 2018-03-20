import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { TweenLite } from 'gsap';
import * as $ from 'jquery';

import { LogoAnimation } from '../../core/animation/logo.animation';

@Component({
  selector: 'app-logo-cip',
  templateUrl: './logo-cip.component.html',
  styleUrls: ['./logo-cip.component.scss']
})
export class LogoCipComponent implements OnInit, AfterViewInit {
  @Input() logoId:       any    = '_logo_cip';
  @Input() showText:     any    = '';
  @Input() size:         any    = '';
  @Input() animation:    any    = '';
  @Input() duration:     any    = 1;
  @Input() delay:        any    = 300;
  @Input() setWatermark: any    = '';

  pixelsBack = ['lpx0', 'lpx1', 'lpx2', 'lpx3', 'lpx4', 'lpx5', 'lpx6', 'lpx7', 'lpx8', 'lpx9', 'lpx10', 'lpx11', 'lpx12', 'lpx13'];
  logoSize: String;
  Mylogo;
  watermark: any;

  constructor() { }

  ngOnInit() {
    // Watermark
    this.watermark = (this.setWatermark === 'true' ? '_logo_opacity01' : '');

    // Set Logo Size
    this.logoSize = `_logo_cip_${this.size}`;
  }

  ngAfterViewInit() {
    this.execAnimation(this.Mylogo);
  }

  execAnimation(logoId) {
    // Se não for logo com imagem
    if (this.animation) {
      if (this.animation === 'show') {
        TweenLite.to($(`#${this.logoId}`), 0, {opacity: 0});

        const delayShowLogo = setTimeout(() => {

          this.execLogo('show', this.logoId);
          clearTimeout(delayShowLogo);

        }, this.delay);
      }
      if (this.animation === 'hide') {
        const delayHideLogo = setTimeout(() => {

          this.execLogo('hide', this.logoId);
          clearTimeout(delayHideLogo);

        }, this.delay);
      }
    }
  }

  execLogo(type, logoId) {
    LogoAnimation.init(logoId, this.duration, this.showText);
    if (type === 'show') {
      LogoAnimation.show();
    }
    if (type === 'hide') {
      LogoAnimation.hide();
    }
  }

}

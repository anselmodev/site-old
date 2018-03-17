import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
// import * as $ from 'jquery';

import { LogoAnimation } from '../../core/animation/logo.animation';

@Component({
  selector: 'app-logo-cip',
  templateUrl: './logo-cip.component.html',
  styleUrls: ['./logo-cip.component.scss']
})
export class LogoCipComponent implements OnInit, AfterViewInit {
  @Input() logoImage:    String = '';
  @Input() type:         String = '';
  @Input() size:         String = '';
  @Input() logoId:       String = '_logo_cip';
  @Input() animation:    any    = null;
  @Input() delayShow:    any    = 0;
  @Input() delayHide:    any    = 0;
  @Input() showText:     any    = '';
  @Input() setWatermark: any    = '';

  pixelsBack = ['lpx0', 'lpx1', 'lpx2', 'lpx3', 'lpx4', 'lpx5', 'lpx6', 'lpx7', 'lpx8', 'lpx9', 'lpx10', 'lpx11', 'lpx12', 'lpx13'];
  logoSize: String;
  sizeImage: any;
  startStop: Boolean = false;
  Mylogo;
  watermark: any;

  constructor() { }

  ngOnInit() {
    // Watermark
    this.watermark = (this.setWatermark === 'true' ? '_logo_opacity01' : '');

    // Set Logo Image
    this.sizeImage = (this.logoImage ? {
      'width': `${this.logoImage}px`
    } : null);

    // Set Logo Size
    this.logoSize = `_logo_cip_${this.size}`;
  }

  ngAfterViewInit() {
    // Se não for logo com imagem
    if (!this.sizeImage) {

      this.Mylogo = new LogoAnimation(this.logoId, 1, this.showText);

      // Mostrar logo
      if (this.animation === 'show') {
        const delayShowLogo = setTimeout(() => {

          this.Mylogo.show();
          clearTimeout(delayShowLogo);

        }, this.delayShow);
      }
      // Esconder logo
      if (this.animation === 'hide') {
        const delayHideLogo = setTimeout(() => {

          this.Mylogo.hide();
          clearTimeout(delayHideLogo);

        }, this.delayHide);
      }
    } else {
      // code
    }
  }

}

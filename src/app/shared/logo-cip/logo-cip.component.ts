import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import * as $ from 'jquery';

import { LogoAnimation, LogoPixelCenterShining, LogoPixelsBackAnimation } from '../../core/logo-animation.core';

@Component({
  selector: 'app-logo-cip',
  templateUrl: './logo-cip.component.html',
  styleUrls: ['./logo-cip.component.scss']
})
export class LogoCipComponent implements OnInit, AfterViewInit {
  @Input() logoImage:  String = '';
  @Input() type:           String = '';
  @Input() size:           String = '';
  @Input() animation:      any    = null;
  @Input() animationDelay: any    = null;

  logoSize: String;
  sizeImage: any;

  constructor() { }

  ngOnInit() {
    // Set Logo Image
    this.sizeImage = (this.logoImage ? {
      'width': `${this.logoImage}px`
    } : null);

    // Set Logo Size
    this.logoSize = `_logo_cip_${this.size}`;
  }

  ngAfterViewInit() {
    if (!this.sizeImage) {
      // Set Animation
      if (this.animation === 'in') {
        LogoAnimation.show(this.animationDelay);
      }
      if (this.animation === 'out') {
        LogoAnimation.hide(this.animationDelay);
      }
    }
  }


  // ----- Logo OUT
  logoAnimationOut(delayOut: number = 0) {
    LogoAnimation.hide(delayOut);
  }
  logoAnimationIn(delayOut: number = 0) {
    LogoAnimation.show(delayOut);
  }


}

import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

import { UserAgent } from '../../core/utility/user-agent.utility';

import { BackgroundAnimation } from '../../core/animation/pixels.animation';

@Component({
  selector: 'cip-bg-pixel',
  templateUrl: './bg-pixel.component.html',
  styleUrls: ['./bg-pixel.component.scss']
})
export class BgPixelComponent implements OnInit, AfterViewInit {
  @Input() imageText: String;

  imageTextClass;
  getOsUser: any = UserAgent.get('os', 'name');

  constructor() { }

  ngOnInit() {
    // Image on Pixel Back
    if (this.imageText === 'false') {
      this.imageTextClass = '_pix_bg_item2_no_img';
    }
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
      // Scroll Animation Pixel
      DOC.scroll(function () {
        if (!scrollStart) {
          scrollStart = true;
          // background animation start
          BackgroundAnimation.start();
        }

        clearTimeout($.data(this, 'scrollCheck'));
        $.data(this, 'scrollCheck', setTimeout(function () {
          scrollStart = false;
          // background animation stop
          BackgroundAnimation.stop();
        }, 250));
      });
    }
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cip-bg-pixel',
  templateUrl: './bg-pixel.component.html',
  styleUrls: ['./bg-pixel.component.scss']
})
export class BgPixelComponent implements OnInit {
  @Input() imageText: String;

  imageTextClass;

  constructor() { }

  ngOnInit() {
    if (this.imageText === 'false') {
      this.imageTextClass = '_pix_bg_item2_no_img';
    }
  }

}

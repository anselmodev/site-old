import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cip-logo',
  templateUrl: './logo-cip.component.html',
  styleUrls: ['./logo-cip.component.scss']
})
export class LogoCipComponent implements OnInit {
  @Input() logoId:       any    = '_logo_cip';
  @Input() showText:     any    = '';
  @Input() size:         any    = '';
  @Input() setWatermark: any    = '';
  @Input() isVisible:    any    = 'false';

  pixelsBack = ['lpx0', 'lpx1', 'lpx2', 'lpx3', 'lpx4', 'lpx5', 'lpx6', 'lpx7', 'lpx8', 'lpx9', 'lpx10', 'lpx11', 'lpx12', 'lpx13'];
  logoSize: String;
  setVisible: String = '';
  watermark: any;

  constructor() { }

  ngOnInit() {
    this.setVisible = (this.isVisible === 'true' ? 'cip--opac-10-i' : '');

    // Watermark
    this.watermark = (this.setWatermark === 'true' ? '_logo_opacity01' : '');

    // Set Logo Size
    this.logoSize = `_logo_cip_${this.size}`;
  }

}

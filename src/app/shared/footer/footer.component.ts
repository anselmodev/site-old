import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ModalAnimation } from '../../core/animation/modal-anim';

import { PreloaderService } from '../../core/service/preloader.service';
import { WindowResize } from '../../core/utility/windowsize.utility';

@Component({
  selector: 'cip-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {
  yearFooter = new Date();
  sloganFooter: Boolean = true;
  @Output() logoShineEventEmiter = new EventEmitter();

  constructor(private _router: Router, private _prealoderServ: PreloaderService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this._prealoderServ.sectionRequest.subscribe(sectionRes => {
      if (this._router.url !== '/') {
        this.sloganFooter = false;
      } else {
        this.sloganFooter = true;
      }
    });
  }

  openAboutSite() {
  }

  closeAboutSite() {
  }

}

import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { ModalAnimation } from '../../core/animation/modal.animation';

import { PreloaderService } from '../../core/service/preloader.service';

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
    ModalAnimation.init({
      type: '',
      width: '50%',
      height: '60%',
      title: 'Tecnologias Utilizadas',
      content: 'Conteúdo aqui...',
      btnSuccess: 'OK',
      btnCancel: 'Cancelar',
      onConfirm: () => {
        this.closeAboutSite();
      },
      onCancel: () => {
        this.closeAboutSite();
      }
    });
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
    ModalAnimation.show();
    this.logoShineEventEmiter.emit('stop');
  }

  closeAboutSite() {
    ModalAnimation.hide();
    setTimeout(() => {
      this.logoShineEventEmiter.emit('play');
    }, 2000);
  }

}

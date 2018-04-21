import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ModalAnimation } from '../../core/animation/modal.animation';

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
    let setW, setH;
    if (WindowResize.get('w') < 768) {
      setW = '100%';
      setH = '100%';
    } else {
      setW = '70%';
      setH = '70%';
    }

    ModalAnimation.init({
      type: '',
      width: setW,
      height: setH,
      title: 'Tecnologias Utilizadas',
      content: 'aaahhh: <b class="cip--txc-blue">Conteúdo aqui...</b>',
      btnSuccess: 'OK',
      btnCancel: 'Cancelar',
      onConfirm: () => {
        this.closeAboutSite();
      },
      onCancel: () => {
        this.closeAboutSite();
      }
    });
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

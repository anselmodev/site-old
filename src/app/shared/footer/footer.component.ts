import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalAnimation } from '../../core/animation/modal.animation';

@Component({
  selector: 'cip-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  yearFooter = new Date();
  @Output() logoShineEventEmiter = new EventEmitter();
  @Output() particlesEventEmiter = new EventEmitter();

  constructor() { }

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

  openAboutSite() {
    ModalAnimation.show();
    this.logoShineEventEmiter.emit('stop');
    this.particlesEventEmiter.emit(0);
  }

  closeAboutSite() {
    ModalAnimation.hide();
    setTimeout(() => {
      this.logoShineEventEmiter.emit('play');
      this.particlesEventEmiter.emit(.1);
    }, 2000);
  }

}

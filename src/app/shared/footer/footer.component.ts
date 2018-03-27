import { Component, OnInit } from '@angular/core';
import { ModalAnimation } from '../../core/animation/modal.animation';

@Component({
  selector: 'cip-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  yearFooter = new Date();

  constructor() { }

  ngOnInit() {
    ModalAnimation.init({
      type: 'info',
      width: '50%',
      height: '60%',
      title: 'Tecnologias Utilizadas',
      content: 'Conteúdo aqui...',
      btnSuccess: 'OK',
      btnCancel: 'Cancelar'
    });
  }

  openAboutSite() {
    ModalAnimation.show();
  }

}

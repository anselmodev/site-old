import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as $ from 'jquery';
import { TimelineLite, Back } from 'gsap';

import { PreloaderService } from '../core/service/preloader.service';
import { ModalAnimation } from '../core/animation/modal-anim';
import { workList, workDetails } from '../core/mockup/work.mockup';
import { WindowResize } from '../core/utility/windowsize.utility';

@Component({
  selector: 'cip-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})

export class WorksComponent implements OnInit {
  titlePage: any = 'Trabalhos, Conceitos e Projetos - CodeInPixel Studios';
  titlePageContent: any = 'Trabalhos, Conceitos e Projetos';

  modalId: String = 'modalGalery';
  workItems:  any = workList;
  workDetail: any = workDetails;
  statusModal: Boolean = false;

  constructor(private titleService: Title, private meta: Meta, private _prealoderServ: PreloaderService) {
    this.meta.updateTag({ name: 'description', content: 'Trabalhos, Conceitos e Projetos Proprietário - CodeInPixel Studios' });
    this.meta.updateTag({ name: 'keywords', content: 'Portifólio, Trabalhos, Conceitos, Projetos' });
    this.meta.updateTag({ name: 'author', content: 'CodeInPixel Studios' });
  }

  ngOnInit() {
    // Remove height: 100%; from body
    $('body, .cip_main').css('height', 'auto');
    this.titleService.setTitle(this.titlePage);
    this.linkNavigationName('Trabalhos e Projetos');
  }

  // Router Navigation
  // linkNavigation(linkTo) {
  //   this._prealoderServ.setSectionRouter({
  //     sectionRouter: linkTo,
  //     preloader: 'close'
  //   });
  // }

  linkNavigationName(linkName) {
    this._prealoderServ.setSectionRouter({
      sectionRouterName: linkName
    });
  }

  slideImage(type) {
    console.log(type);
  }

  modalGalery(idGalery?) {
    if (!this.statusModal) {
      ModalAnimation.open(`#${this.modalId}`);
      this.statusModal = true;
      // data galery
      console.log(idGalery);

    } else {
      ModalAnimation.close(`#${this.modalId}`);
      this.statusModal = false;
    }
  }
}


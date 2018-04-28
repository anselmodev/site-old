import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import * as $ from 'jquery';
import { TimelineLite, Back } from 'gsap';

import { PreloaderService } from '../core/service/preloader.service';
import { ModalAnimation } from '../core/animation/modal-anim';
import { workList, workDetails } from '../core/mockup/work.mockup';

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
  workDetail: any = {};
  workDetailId: any;
  statusModal: Boolean = false;
  urlImage: String = '';
  tmpImg: HTMLImageElement;
  tmpImgTitle: String;
  tmpImgAlt: String;
  countImgGalery: any;
  slideActiveNumber: any = 0;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private _prealoderServ: PreloaderService) {
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

  linkNavigationName(linkName) {
    this._prealoderServ.setSectionRouter({
      sectionRouterName: linkName
    });
  }

  showImagesWork(files, index, slide?) {
    const COUNT_IMAGES = this.countImgGalery - 1;
    if (slide === 'prev') {
      if (index !== 0) {
        this.slideActiveNumber = index - 1;
      } else {
        this.slideActiveNumber = 0;
      }
    } else if (slide === 'next') {
      if (index < COUNT_IMAGES) {
        this.slideActiveNumber = index + 1;
      }
    } else {
      this.slideActiveNumber = index;
    }
    // Image Load
    $('._modal_galery_slide_left, ._modal_galery_slide_right').hide();
    this.getImages({url: files[this.slideActiveNumber].file});
  }

  getImages(data: any) {
    $('#work_galery_image').hide();
    $('#work_galery_loader').show();

    // Onloaded Image
    const loaded = () => {
      // Alt and Title
      this.tmpImgTitle = this.workDetailId.title;
      this.tmpImgAlt = this.workDetailId.alt;

      this.urlImage = data.url;
      $('#work_galery_loader').hide();
      $('#work_galery_image').show();

      // Slide buttons
      if (this.countImgGalery > 1) {
        $('._modal_galery_slide_left, ._modal_galery_slide_right').show();
      }
    };

    if (this.tmpImg) {
      this.tmpImg.onload = null;
    }
    this.tmpImg = new Image();
    this.tmpImg.onload = loaded;
    this.tmpImg.src = data.url;
  }

  modalGalery(idGalery?) {
    if (!this.statusModal) {
      ModalAnimation.open(`#${this.modalId}`, () => {
        this.workDetailId = workDetails.find(gl => gl.id === idGalery);
        this.workDetail = this.workDetailId;
        this.countImgGalery = this.workDetailId.images.length;

        // Details Work
        this.showImagesWork(this.workDetailId.images, 0);

      });
      this.statusModal = true;

    } else {
      ModalAnimation.close(`#${this.modalId}`);
      this.statusModal = false;
    }
  }

  slideImage(type) {
    this.showImagesWork(this.workDetailId.images, this.slideActiveNumber, type);
  }
}


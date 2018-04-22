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
  modalId: String = 'modal_about_site';
  statusModal: Boolean = false;
  tecnologyList: any = [
    { title: 'Css 3'},
    { title: 'Html 5'},
    { title: 'Javascript'},
    { title: 'TypeScript'},
  ];

  frameworLibList: any = [
    { title: 'Angular 5', link: 'https://angular.io' },
    { title: 'GreenSock GSPA', link: 'https://greensock.com/gsap' },
    { title: 'HammerJs', link: 'http://hammerjs.github.io' },
    { title: 'Jquery', link: 'https://jquery.com' },
    { title: 'Node.Js', link: 'https://nodejs.org' },
    { title: 'Sass', link: 'https://sass-lang.com' },
  ];

  optimizekList: any = [
    { title: 'Otimização de Imagens'},
    { title: 'SEO'},
  ];

  hostdbList: any = [
    { title: 'AWS ( Host - DB )', link: 'https://aws.amazon.com/pt'},
    { title: 'Firebase ( Real Time DB - Auth )', link: 'https://firebase.google.com'},
    { title: 'MongoDb ( DB )', link: 'https://www.mongodb.com'},
  ];

  toolsList: any = [
    { title: 'Adobe Photoshop'},
    { title: 'Adobe XD'},
    { title: 'WebStorm / VsCode'},
  ];

  othersList: any = [
    { title: 'Bitbucket', link: 'https://bitbucket.org'},
    { title: 'Flat Icons', link: 'https://flaticon.com'},
    { title: 'Font Awesome', link: 'https://fontawesome.com/icons'},
    { title: 'GitHub', link: 'https://github.com'},
    { title: 'JWT', link: 'https://jwt.io'},
    { title: 'Slack', link: 'https://slack.com'},
    { title: 'TinyPng', link: 'https://tinypng.com'},
    { title: 'Trello', link: 'https://trello.com/'},
  ];

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

  linkNavigation(linkTo) {
    this.aboutSite(false);
    setTimeout(() => {
      this._prealoderServ.setSectionRouter({
        sectionRouter: linkTo,
        preloader: 'close'
      });
    }, 500);
  }

  aboutSite(type) {
    if (type) {
      ModalAnimation.open(`#${this.modalId}`);
      this.statusModal = true;
    } else {
      ModalAnimation.close(`#${this.modalId}`);
      this.statusModal = false;
    }
  }

}

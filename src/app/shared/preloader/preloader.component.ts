import { Component, OnInit } from '@angular/core';

import { PreloaderService } from '../../core/service/preloader.service';

@Component({
  selector: 'cip-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {
  pageName: String = '';
  constructor(private _prealoderServ: PreloaderService) {}

  ngOnInit() {
    this._prealoderServ.sectionRequest.subscribe(sectionRes => {
      this.pageName = `Preprando a página <br> <b>"${sectionRes['sectionRouterName']}"</b>`;
    });
  }

}

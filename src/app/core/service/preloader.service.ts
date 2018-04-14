/*
* [ Opções do Preloader Service ]
* {
*   sectionRouterName: 'Nome da Página ou Rota',
*   sectionRouter: 'rota do routerLink',
*   preloader: 'Acão do Preloader "open" ou "close"'
* }
*/


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PreloaderService {

  private sectionLoad = new BehaviorSubject<any>('');

  // Watch on app.component
  sectionRequest = this.sectionLoad.asObservable();

  constructor() { }

  setSectionRouter(req) {
    this.sectionLoad.next(req);
  }

}

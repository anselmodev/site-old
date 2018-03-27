import { Component, OnInit } from '@angular/core';
import { Preloader } from '../../core/animation/preloader.animation';

@Component({
  selector: 'cip-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    Preloader.show({
      test: 'Meu teste Preloader!'
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  titlePage: any = 'Aplicações Mobile, Desktop, E-commerce e Sistemas - CodeInPixel Studios';
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.titlePage);
  }

}

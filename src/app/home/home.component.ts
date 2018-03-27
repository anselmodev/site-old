import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import * as $ from 'jquery';

declare var particlesJS: any;


@Component({
  selector: 'cip-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  titlePage: any = 'Aplicações Mobile, Sites, E-commerce e Sistemas - CodeInPixel';

  pixels_home = [
    '_hpp1', '_hpp2 _hpp_wh1', '_hpp3 _hpp_wh1', '_hpp4 _hpp_wh2', '_hpp5 _hpp_wh2', '_hpp6 _hpp_wh2',
    '_hpp7 _hpp_wh2', '_hpp8 _hpp_wh3', '_hpp9 _hpp_wh3', '_hpp10 _hpp_wh4', '_hpp11 _hpp_wh4'
   ];

  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTag({ name: 'description', content: 'Aplicações Mobile, Sites, E-commerce e Sistemas - CodeInPixel Studios' });
    this.meta.addTag({ name: 'keywords', content: 'Aplicativos Mobile, Sites, E-commerce, Aplicativos Desktop, Sistemas' });
    this.meta.addTag({ name: 'author', content: 'CodeInPixel Studios' });
  }

  ngOnInit() {
    this.titleService.setTitle(this.titlePage);
  }

  ngAfterViewInit() {
    particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function() { });
  }

}

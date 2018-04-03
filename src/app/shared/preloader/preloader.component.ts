import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cip-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit, AfterViewInit {
  @Output() logoEventEmiter = new EventEmitter();
  constructor() {}

  ngOnInit() { }

  ngAfterViewInit() { }

}

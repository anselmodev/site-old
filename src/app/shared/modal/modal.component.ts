import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ModalAnimation } from '../../core/animation/modal.animation';

// import * as $ from 'jquery';

@Component({
  selector: 'cip-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() { }

  modalOnSuccess() {
    ModalAnimation.onSuccess();
  }
  modalOnCancel() {
    ModalAnimation.onCancel();
  }

}

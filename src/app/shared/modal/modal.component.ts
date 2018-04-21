import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ModalAnimation } from '../../core/animation/modal-anim';


// import * as $ from 'jquery';

@Component({
  selector: 'cip-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {
  pixelsBack = [
    13, 14, 15, 16,
    1, 2, 3, 4,
    9, 10, 11, 12,
    17, 18, 19, 20,
    5, 6, 7, 8,
    21, 22, 23, 24,
    25, 26, 27, 28,
    29, 30, 31
  ];
  @Input() modalId: String;
  @Input() externalContent: Boolean = false;

  constructor() { }

  ngOnInit() {
    if (!this.modalId) {
      alert(`Defina um ID para o Modal!`);
    }
  }

  ngAfterViewInit() { }

  modalOnSuccess() {
    // ModalAnimation.onConfirm();
  }
  modalOnCancel() {
    // ModalAnimation.onCancel();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import * as $ from 'jquery';

import { PreloaderService } from '../core/service/preloader.service';
import { ContactFormService } from '../core/service/contact-form.service';
import { InputAnimation } from '../core/animation/input.animation';
import { ContactModel } from '../core/model/contact.model';
import { UserAgent } from '../core/utility/user-agent.utility';

@Component({
  selector: 'cip-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  titlePage: any = 'Contato, Fale Comigo - CodeInPixel';
  titlePageContent: any = 'Contato, Orçamento, Tirar Dúvidas ou uma Consultoria?';
  contactForm: FormGroup;
  dateNow:  any = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private titleService: Title,
    private meta: Meta,
    private _prealoderServ: PreloaderService,
    private _contactList: ContactFormService,
    private datePipe: DatePipe
  ) {
    this.meta.updateTag({ name: 'description', content: 'Contato, Orçamento, Tirar Dúvidas ou Consultoria - CodeInPixel Studios' });
    this.meta.updateTag({ name: 'keywords', content: 'Contato, Orçamento, Dúvidas, Consultoria' });
    this.meta.updateTag({ name: 'author', content: 'CodeInPixel Studios' });
  }

  ngOnInit() {
    // Form
    this.contactForm = this.formBuilder.group({
      // contact_name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      contact_name: this.formBuilder.control('', [Validators.required]),
      contact_email: this.formBuilder.control('', [Validators.required]),
      contact_phone: this.formBuilder.control('', [Validators.required]),
      // contact_desc: this.formBuilder.control('', [Validators.required, Validators.minLength(20)]),
      contact_desc: this.formBuilder.control('', [Validators.required]),
    });

    // Remove height: 100%; from body
    $('body, .cip_main').css('height', 'auto');
    this.titleService.setTitle(this.titlePage);
    this.linkNavigationName('Fale Comigo');
  }

  // Router Navigation
  // linkNavigation(linkTo) {
  //   this._prealoderServ.setSectionRouter({
  //     sectionRouter: linkTo,
  //     preloader: 'close'
  //   });
  // }

  linkNavigationName(linkName) {
    this._prealoderServ.setSectionRouter({
      sectionRouterName: linkName
    });
  }

  pulseCp(el) {
    InputAnimation(el);
  }

  submitForm(dataForm: ContactModel, form) {
    dataForm['contact_browser'] =  UserAgent.get('browser', 'name');
    dataForm['contact_os'] =  UserAgent.get('os', 'name');
    dataForm['contact_date'] = this.datePipe.transform(this.dateNow, 'yyyy-MM-dd H:mm:ss');
    // Salvar dados e enviar e-mail
    this._contactList.setContact(dataForm).then((res) => {
      if (res === true) {
        console.log('Enviar email');
      } else {
        console.log('Erro ao enviar e-mail. Porém os dados foram salvos.');
      }
    });
  }

}

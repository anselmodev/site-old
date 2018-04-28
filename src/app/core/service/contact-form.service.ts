import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import { DatePipe } from '@angular/common';


@Injectable()
export class ContactFormService {
  DB: any;
  url_api: any = 'https://codeinpixel.com/api/send-mail';
  constructor(private _http: HttpClient, private datePipe: DatePipe) {
    this.DB = firebase.database();
  }

  // List Contacts
  getContacts(ref) {
    this.DB.ref( 'contacts/list' ).on('value', (snapshot) => {
      console.log(snapshot.val());
    });
  }

  // Salvar Contato
  setContact(data) {
    return new Promise((resolve, reject) => {
      if (!data.contact_email) {
        reject('Defina o email para pesquisar o contato!');
      }
      const updateDt = {
          browser : data.contact_browser,
          date : data.contact_date,
          description : data.contact_desc,
          email : data.contact_email,
          name : data.contact_name,
          os : data.contact_os,
          phone : data.contact_phone,
          status : 1
      };

      this.DB.ref('contacts/list').push( updateDt ).then((res) => {

        // Enviar email de notificação
        const dataMail = {
          name: data.contact_name,
          emailToCustomer: data.contact_email,
          emailToAdmin: 'ola@codeinpixel.com',
          phone: data.contact_phone,
          message: data.contact_desc,
          date: `${this.datePipe.transform(data.contact_date, 'dd/MM/yyyy')}
          às ${this.datePipe.transform(data.contact_date, 'H:mm')} hrs.` ,
          browser: data.contact_browser,
          os: data.contact_os
        };

        this._http.post(this.url_api, dataMail).subscribe(
          resultMail => {
            if (resultMail) {
              resolve(true);
            }
          },
          msg => reject(`Error: ${msg.status} ${msg.statusText}`)
        );

      }).catch((err) => {
        reject(`Erro: ${err}`);
      });
    });
  }

}

import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable()
export class ContactFormService {
  DB: any;
  constructor() {
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
        resolve(true);
      }).catch((err) => {
        reject(`Erro: ${err}`);
      });
    });
  }

}

/**
 ### Support operation system list:
       windows: Windows.
       macosx: Macintosh.
       ios: iOS.
       android: Android.
       linux: Linux.

 ### Support browser list:
       edge: Microsoft Edge browser.
       ie: Microsoft Internet Explorer.
       chrome: Google Chrome.
       firefox: Mozilla Firefox.
       safari: Apple Safari.
       opera: Opera.
 */

import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { environment } from '../../../environments/environment';
import * as firebase from 'firebase';
import * as jwt from 'angular2-jwt-simple';

import { UserAgent } from '../utility/user-agent.utility';

@Injectable()
export class CounterService {
  DB:       any;
  dateNow:  any = new Date();
  tokenKey: String = '9e59f8862839d5cc83df715fd73ca8ad';
  tokenGen: any;
  visitorNumber: any;

  constructor( private datePipe: DatePipe ) {
    firebase.initializeApp(environment.firebase);
    this.DB = firebase.database();
  }

  // List visitors counters
  getCounters(ref) {
    this.DB.ref( ref ).on('value', (snapshot) => {
      console.log(snapshot.val());
    });
  }

  // Update visitors counters
  updCounter(ref) {
    this.DB.ref( 'counter/visitorsNumber' ).once('value', (snapshot) => {
      this.visitorNumber = snapshot.val();
    });
    // Check Token Exists
    if (!this.tokenVisitor('check')) {
      this.tokenVisitor('set', this.visitorNumber);

      const updateCount = {};
      this.DB.ref( ref ).once('value', (snapshot) => {
        updateCount[ref] = {
          lastDate: this.datePipe.transform(this.dateNow, 'yyyy-MM-dd H:mm:ss'),
          visits: snapshot.val()['visits'] + 1
        };
        updateCount['counter/visitorsNumber'] = this.visitorNumber + 1;
        this.DB.ref().update( updateCount );
      });
    }
  }

  tokenVisitor(type, visitorNumber?) {

    if (type === 'set') {

      const date    = new Date(this.dateNow);
      const newDate = new Date(date);
      // newDate.setDate(newDate.getDate() + .001);
      newDate.setDate(newDate.getDate() + 1);

      const newToken = jwt.encode({
        visitorNumber,
        expire: newDate
      }, this.tokenKey);

      if (!localStorage.getItem('tokenVisitor')) {
        localStorage.setItem('tokenVisitor', newToken);
      }

      return localStorage.getItem('tokenVisitor');

    } else if (type === 'check') {

      if (!localStorage.getItem('tokenVisitor')) {

        return false;

      } else {

        const tokenToCheck = jwt.decode(localStorage.getItem('tokenVisitor'), this.tokenKey);
        const getExpire    = new Date(tokenToCheck['expire']);

        if (this.dateNow.getTime() > getExpire) {
          localStorage.removeItem('tokenVisitor');
          return false;
        } else {
          return true;
        }

      }
    }
  }

  getIp() {
  }

  execCounter() {
    // Get UserAgent
    const getUserBrowser = UserAgent.get('browser', 'name');
    const getUserOs      = UserAgent.get('os', 'name');

    // Check Types
    const checkBrowserType = (
      getUserBrowser === 'chrome' ||
      getUserBrowser === 'opera' ||
      getUserBrowser === 'safari' ||
      getUserBrowser === 'firefox' ?
      getUserBrowser : 'others_browsers' );

    const checkOsType = (
      getUserOs === 'macosx' ||
      getUserOs === 'linux' ||
      getUserOs === 'ios' ||
      getUserOs === 'android' ||
      getUserOs === 'windows' ?
      getUserOs :  'others' );

    if (checkBrowserType === 'ie' || checkBrowserType === 'edge') {

      this.updCounter(`counter/ie_edge/${checkOsType}/visits`);

    } else {

      this.updCounter(`counter/${checkBrowserType}/${checkOsType}`);

    }
  }
}

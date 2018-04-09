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

import * as detector from 'detector';

let userAgent: Object;

const UserAgent = {
  get: (type, key = '') => {
    switch (type) {
      case 'all':
        userAgent = detector;
        break;

      case 'browser':
        userAgent = {
          name: detector.browser.name,
          version: detector.browser.version
        };
        break;

      case 'device':
        userAgent = {
          name: detector.device.name,
          version: detector.device.version
        };
        break;

      case 'os':
        userAgent = {
          name: detector.os.name,
          version: detector.os.version
        };
        break;

      case 'engine':
        userAgent = {
          name: detector.engine.name,
          version: detector.engine.version
        };
        break;
    }
    if (key && ( key === 'name' || key === 'version' ) ) {
      return userAgent[key];
    } else {
      return userAgent;
    }
  }
};

export { UserAgent };

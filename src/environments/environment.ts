// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAp83OMRDSPDu_652hzu35xHqgcFvjjo2Q',
    authDomain: 'codeinpixel-site.firebaseapp.com',
    databaseURL: 'https://codeinpixel-site.firebaseio.com',
    projectId: 'codeinpixel-site',
    storageBucket: 'codeinpixel-site.appspot.com',
    messagingSenderId: '317508851109'
  }
};

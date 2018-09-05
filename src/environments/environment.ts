// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCtSjkC0azVahOBB_lOX5TsZ4CYgFjgwZc",
    authDomain: "blog-de49d.firebaseapp.com",
    databaseURL: "https://blog-de49d.firebaseio.com",
    projectId: "blog-de49d",
    storageBucket: "blog-de49d.appspot.com",
    messagingSenderId: "9927173665"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

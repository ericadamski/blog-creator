import 'core-js';
import 'zone.js/dist/zone';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { enableProdMode } from '@angular/core';
// import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

import { AppComponent } from './app.component';

// enableProdMode();

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  // FIREBASE_PROVIDERS,
  // defaultFirebase('https://ericadamski-githubio-come.firebaseio.com/')
]);

import { Component, OnInit } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([])
export class AppComponent { }

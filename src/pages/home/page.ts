import { Auth, FacebookAuth, User } from '@ionic/cloud-angular';
import { Component } from '@angular/core';
import { TestPage } from '../test/page';
import { Http, Response } from '@angular/http';


import { NavController, App } from 'ionic-angular';
// import {App, IonicApp, Platform} from 'ionic-framework/ionic';

@Component({
  templateUrl: 'template.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public app: App,
    public auth: Auth,
    public user: User,
    private http: Http
  ) {}

  test(){
    // let nav = this.app.getRootNav()
    // let nav = this.app.getRootNav('nav');
    // nav.setRoot
    // nav.push(TestPage);
    console.log(this.user, this.auth);

  }

}

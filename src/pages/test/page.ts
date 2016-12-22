import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HomePage } from '../home/page';

@Component({
  templateUrl: 'template.html'
})
export class TestPage {

  constructor(public navCtrl: NavController) {
  }
  home() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(HomePage);
  }

}

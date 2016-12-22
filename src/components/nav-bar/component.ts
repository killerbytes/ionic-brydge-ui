import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { MenuPage } from '../../pages/menu/page';

@Component({
  selector: 'nav-bar',
  templateUrl: 'template.html'
})

export class NavBar {
  constructor( public modalCtrl: ModalController ) {
  }
  openMenu() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in

    let modal = this.modalCtrl.create(MenuPage);
      modal.present();

  }

}

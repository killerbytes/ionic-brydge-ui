import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { MenuPage } from '../../pages/menu/page';


@Component({
  selector: '.brydge-navbar',
  templateUrl: 'template.html'
})
export class BrydgeNavbar {
  constructor(public modalCtrl: ModalController) {
  }
  openMenu() {
    let modal = this.modalCtrl.create(MenuPage);
      modal.present();
  }

}

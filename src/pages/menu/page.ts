import { Component } from '@angular/core';
import { App, ModalController, ViewController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/page';
import { BookmarksPage } from '../bookmarks/page';
import { SubscriptionListPage } from '../subscription-list/page';
import { AboutPage } from '../about/page';


@Component({
  selector: 'page-home',
  templateUrl: 'template.html'
})
export class MenuPage {
  pages: any;
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public appCtrl: App
  ) {
    this.pages = [
        {title: 'Your profile', component: ProfilePage, icon: "contact"},
        {title: 'Saved', component: BookmarksPage, icon: "star"},
        {title: 'Industry Topics', component: SubscriptionListPage, icon: "briefcase"},
        {title: 'More about Brydge', component: AboutPage, icon: "help"},
    ];

  }
  goTo(item){
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(item.component);
  }
  dismiss() {
    this.viewCtrl.dismiss();

  }
}

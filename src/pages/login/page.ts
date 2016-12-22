import { Component, OnInit } from '@angular/core';
import { Auth, FacebookAuth, User } from '@ionic/cloud-angular';
import { NavController } from 'ionic-angular';

import { UserService } from '../../app/services/user';

import { HomePage } from '../home/page';


@Component({
  selector: 'page-home',
  templateUrl: 'page.html',
  providers: [UserService]
})

export class LoginPage implements OnInit {
  token: any;
  constructor(
    public navCtrl: NavController,
    public facebookAuth: FacebookAuth,
    public auth: Auth,
    public user: User,
    private userService: UserService,

  ) {}

  login(provider){
    this.userService.login(provider).then(res=>{
      this.userService.load().then(res=>{
        this.userService.save('data', this.user.social[provider].data);
        this.userService.save('provider', provider);
        this.navCtrl.setRoot(HomePage);
      });
    });
  }

  checkLoginStatus(){
    if(this.auth.isAuthenticated()){
      this.userService.load().then(res=>{
        this.navCtrl.setRoot(HomePage);
      });
    }
  }

  ngOnInit(): void {

    this.checkLoginStatus();
  }


}

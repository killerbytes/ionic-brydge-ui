import { Injectable } from '@angular/core';
import { Auth, FacebookAuth, User } from '@ionic/cloud-angular';

@Injectable()

export class UserService {
  data = {};
  constructor(
    public facebookAuth: FacebookAuth,
    public user: User,
    public auth: Auth,
  ) {}

  login(provider):Promise<any>{
    let social;
    switch(provider){
      case 'facebook':
        social = this.facebookAuth.login();
        break;
      case 'google':
        break;
      case 'twitter':
        social = this.auth.login('twitter');
        break;
    }
    return social;
  }

  logout(provider){
    switch(provider){
      case 'facebook':
        this.facebookAuth.logout();
        break;
      case 'twitter':
        this.auth.logout();
        break;
    }
  }

  load(){
    this.data = this.user.get('data', {});
    return this.user.load();
  }

  get(key){
    return this.user.get(key, {
      profile_picture: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c0.2.50.50/p50x50/1549491_618818981489070_1093118099_n.jpg?oh=f4c6a65d5f0eb854a082d664b874eb9a&oe=58F7808D',
      full_name: 'Joel Carlos'
    });
  }

  save(key, value){
    this.user.set(key, value);
    this.user.save();
  }
}

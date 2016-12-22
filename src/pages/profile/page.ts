import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../../app/services/profile';
import { UserService } from '../../app/services/user';
import { EditProfilePage } from '../edit-profile/page';


@Component({
  templateUrl: 'template.html',
  providers: [ProfileService, UserService]
})

export class ProfilePage implements OnInit {
  profile: any;
  data: any;
  provider: string;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    private userService: UserService,
    private profileService: ProfileService
  ) {}


  getMe(): void {
    this.profileService.me().subscribe(res=>{
      this.profile = res;
      this.data = this.userService.get('data');
      this.provider = this.userService.get('provider');
    });
  }
  ngOnInit(): void {

    this.getMe();
  }
  edit(){
    this.navCtrl.push(EditProfilePage);
  }

  logout(provider){
    this.userService.logout(provider);
  }

}

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../../app/services/profile';
import { UserService } from '../../app/services/user';


@Component({
  templateUrl: 'template.html',
  providers: [ProfileService, UserService]
})

export class EditProfilePage implements OnInit {
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

  logout(provider){
    this.userService.logout(provider);
  }

  save(){
    this.navCtrl.pop();
  }

}

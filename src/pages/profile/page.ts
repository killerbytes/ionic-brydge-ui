import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../../app/services/profile';
import { UserService } from '../../app/services/user';

import { EditProfilePage } from '../edit-profile/page';
import { StoryPage } from '../story/page';
import { CommentsPage } from '../comments/page';


@Component({
  templateUrl: 'template.html',
  providers: [ProfileService, UserService]
})

export class ProfilePage implements OnInit {
  profile: any;
  data: any;
  provider: string;
  opinions: any;

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

  getOpinions(){
    this.profileService.query(12, 'opinions')
    .subscribe(res=>{
      this.opinions = res;
    })
  }

  ngOnInit(): void {

    this.getMe();
    this.getOpinions();

  }
  edit(){
    this.navCtrl.push(EditProfilePage);
  }

  gotoStory(id){
    this.navCtrl.push(StoryPage, {id: id});
    this.navCtrl.push(CommentsPage, {id: id});
  }


  logout(provider){
    this.userService.logout(provider);
  }

}

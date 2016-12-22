import { Component, OnInit } from '@angular/core';
import { StoryListPage } from '../story-list/page';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { SubscriptionService } from '../../app/services/subscription';
import { UtilsService } from '../../app/services/utils';
import { LoadingService } from '../../app/services/loading';


@Component({
  templateUrl: 'template.html',
  providers: [SubscriptionService, UtilsService, LoadingService]
})
export class SubscriptionListPage implements OnInit {
  topics;
  loading;
  constructor(
    private subscriptionService: SubscriptionService,
    private utilsService: UtilsService,
    private loadingService: LoadingService,
    public platform: Platform,
    public navCtrl: NavController,
  ) { }
  getSubscriptions(): void {
    this.loadingService.show(true);
    this.subscriptionService.findAll()
    .subscribe(res=>{
      this.topics = res;
      this.loadingService.show(false);
    });
  }
  ngOnInit(): void {
    this.getSubscriptions();
  }
  gotoTopic(id){
    this.navCtrl.push(StoryListPage, {id: id});
  }

  getWidth(){
    return (this.platform.width() / 2) - 15;
  }
}

import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { SubscriptionListPage } from '../subscription-list/page';

import { SubscriptionService } from '../../app/services/subscription';
import { TopicService } from '../../app/services/topic';
import { UtilsService } from '../../app/services/utils';
import { LoadingService } from '../../app/services/loading';


@Component({
  templateUrl: 'template.html',
  providers: [TopicService, SubscriptionService, UtilsService, LoadingService]
})
export class TopicsPage implements OnInit {

  topics = [];
  subscriptions = [];

  constructor(
    private topicService: TopicService,
    private subscriptionService: SubscriptionService,
    private utilsService: UtilsService,
    private loadingService: LoadingService,
    public platform: Platform,
    public navCtrl: NavController,
  ) { }

  // getSubscriptions(): void {
  //   this.subscriptionService.findAll()
  //   .subscribe(res=>{
  //     console.log(res)
  //     this.subscriptions = res;
  //   });
  // }
  //
  // getTopics(): void {
  //   this.loadingService.show(true);
  //   this.topicService.findAll()
  //   .subscribe(res=>{
  //     this.topics = res;
  //     this.loadingService.show(false);
  //   });
  // }

  ngOnInit(): void {
    Observable.forkJoin(
      this.subscriptionService.findAll(),
      this.topicService.findAll(),
    ).subscribe(res=>{
      let subscriptions = res[0];
      let topics = res[1];
      subscriptions.forEach(i=>{
        let topic = topics.find(obj => {
          return obj.id == i.id
        })
        if(topic) topic.checked = true;
      })
      this.topics = topics;
    })

  }

  gotoSubscriptions(id){
    this.navCtrl.push(SubscriptionListPage);
  }

  checkItem(item){
    console.log(item.id, !item.checked)
  }

}

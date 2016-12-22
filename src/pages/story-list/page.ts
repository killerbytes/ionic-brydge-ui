import { Component, OnInit } from '@angular/core';
import { Topic, TopicService } from '../../app/services/topic';
import { LoadingService } from '../../app/services/loading';

import { StoryPage } from '../story/page';
import { SubscriptionListPage } from '../subscription-list/page';
import { NavController, NavParams } from 'ionic-angular';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';




@Component({
  templateUrl: 'template.html',
  providers: [TopicService, LoadingService]
})

export class StoryListPage implements OnInit {
  topic: Topic;
  constructor(
    private topicService: TopicService,
    private loadingService: LoadingService,
    public navCtrl: NavController,
    public params: NavParams,
    private sanitizer: DomSanitizer
  ) {}
  getCoverImage(){
    return this.topic ? this.sanitizer.bypassSecurityTrustStyle(`url(${this.topic.stories[0].image})`)  : null;
  }
  getTopic(id): void {
    this.loadingService.show(true);
    this.topicService.findRecord(id)
      .subscribe(res =>{
        this.topic = res;
        this.loadingService.show(false);
      });
  }
  gotoSubscriptions(){
    this.navCtrl.push(SubscriptionListPage);
  }
  gotoStory(id){
    this.navCtrl.push(StoryPage, {id: id});
  }
  ngOnInit(): void {
    this.getTopic(this.params.get('id'));
  }
}

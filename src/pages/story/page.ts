import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StoryService } from '../../app/services/story';
import { CommentsPage } from '../comments/page';

import { LoadingService } from '../../app/services/loading';


@Component({
  templateUrl: 'template.html',
  providers: [StoryService, LoadingService]
})

export class StoryPage implements OnInit {

  constructor(
    private storyService: StoryService,
    private loadingService: LoadingService,
    public navCtrl: NavController,
    public params: NavParams
  ) {}

  story: any;

  getStory(id): void {
    this.loadingService.show(true);
    this.storyService.findRecord(id).subscribe(res=>{
      this.story = res;
      this.loadingService.show(false);
    });
  }
  ngOnInit(): void {
    this.getStory(this.params.get('id'));
  }
  gotoComments(){
    this.navCtrl.push(CommentsPage, {id: this.params.get('id')});
  }
}

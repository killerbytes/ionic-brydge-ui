import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Opinion, OpinionService } from '../../app/services/opinion';
import { StoryService } from '../../app/services/story';
import { CommentService } from '../../app/services/comment';
import { LoadingService } from '../../app/services/loading';

import { Observable } from 'rxjs/Observable';


@Component({
  templateUrl: 'template.html',
  providers: [OpinionService, StoryService, CommentService, LoadingService]
})

export class CommentsPage implements OnInit {
  opinions: Opinion[];
  story: any;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    private opinionService: OpinionService,
    private storyService: StoryService,
    private commentService: CommentService,
    private loadingService: LoadingService
  ) {}

  getStory(id): void {
    this.storyService.findRecord(id).subscribe(res=>{
      this.story = res;
      this.loadingService.show(false);
    });
  }

  getOpinions(id): void {
    this.opinionService.query(id).subscribe(res=>{
      this.opinions = res;
    });
  }

  ngOnInit(): void {
    this.loadingService.show(true);
    this.getStory(this.params.get('id'));
    this.getOpinions(this.params.get('id'));
  }

  toggleReplies(item){
    this.commentService.query(item.id).subscribe(res=>{
      item.comments = res;
    });
    item.show = !item.show;

  }

  submit(){

  }
}

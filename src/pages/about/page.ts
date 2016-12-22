import { Component, OnInit } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'template.html',
})

export class AboutPage implements OnInit {
  story: any;

  constructor(
    public navCtrl: NavController,
    public params: NavParams
  ) {}


  getStory(id): void {
    // this.storyService.findRecord(id).subscribe(res=>{
    //   console.log(res.story)
    //   this.story = res.story
    // });
  }
  ngOnInit(): void {

    // this.getStory(this.params.get('id'));
  }
}

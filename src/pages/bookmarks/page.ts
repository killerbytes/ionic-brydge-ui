import { Component, OnInit } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { BookmarkService } from '../../app/services/bookmark';


@Component({
  templateUrl: 'template.html',
  providers: [BookmarkService]
})

export class BookmarksPage implements OnInit {
  bookmarks: any;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    private bookmarkService: BookmarkService
  ) {}

  getBookmarks(): void {
    this.bookmarkService.findAll().subscribe(res=>{
      this.bookmarks = res;
    });
  }

  ngOnInit(): void {
    this.getBookmarks();
  }
}

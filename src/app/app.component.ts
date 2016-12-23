import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/page';
import { LoginPage } from '../pages/login/page';
import { ProfilePage } from '../pages/profile/page';
import { EditProfilePage } from '../pages/edit-profile/page';
import { BookmarksPage } from '../pages/bookmarks/page';
import { StoryPage } from '../pages/story/page';
import { TopicsPage } from '../pages/topics/page';
import { CommentsPage } from '../pages/comments/page';
import { StoryListPage } from '../pages/story-list/page';
import { SubscriptionListPage } from '../pages/subscription-list/page';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage = ProfilePage;
  // rootPage = LoginPage;
  rootPage = SubscriptionListPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}

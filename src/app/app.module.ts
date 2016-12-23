import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/page';
import { LoginPage } from '../pages/login/page';
import { TestPage } from '../pages/test/page';
import { TopicsPage } from '../pages/topics/page';
import { SubscriptionListPage } from '../pages/subscription-list/page';
import { MenuPage } from '../pages/menu/page';
import { ProfilePage } from '../pages/profile/page';
import { EditProfilePage } from '../pages/edit-profile/page';
import { BookmarksPage } from '../pages/bookmarks/page';
import { AboutPage } from '../pages/about/page';
import { StoryPage } from '../pages/story/page';
import { CommentsPage } from '../pages/comments/page';
import { StoryListPage } from '../pages/story-list/page';

import { NavBar } from '../components/nav-bar/component';
import { ImageWrapper } from '../components/image-wrapper/component';
import { MediaUser } from '../components/media-user/component';
import { UserTitle } from '../components/user-title/component';
import { BrydgeNavbar } from '../components/brydge-navbar/component';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'd8ff35d9'
  }
};

@NgModule({
  declarations: [
    MyApp,
    TestPage,
    LoginPage,
    SubscriptionListPage,
    HomePage,
    ProfilePage,
    EditProfilePage,
    BookmarksPage,
    AboutPage,
    TopicsPage,
    StoryPage,
    CommentsPage,
    StoryListPage,
    MenuPage,

    NavBar,
    BrydgeNavbar,
    ImageWrapper,
    MediaUser,
    UserTitle

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TestPage,
    SubscriptionListPage,
    HomePage,
    ProfilePage,
    EditProfilePage,
    BookmarksPage,
    AboutPage,
    TopicsPage,
    StoryPage,
    CommentsPage,
    StoryListPage,
    MenuPage,

    NavBar,
    BrydgeNavbar,
    ImageWrapper,
    MediaUser,
    UserTitle
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HOST, NAMESPACE } from './config';
import 'rxjs/Rx';

let topicsURL = HOST +  NAMESPACE + 'topics';

export class Topic {
  id: number;
  name: string;
  stories: Array<any>;
}

/*
export const DATA: Topic = {
        title: 'Test Edition',
        id: 1,
        stories: [
        { "id":"70f15c94ad3f11e69324acbc32b17109", "title": "Google acquired YouTube 10 years ago today", "image": "https://storage.googleapis.com/brydge-assets/crawler/ED4A2D2C7807C5F317FE727956E3F6B8/image", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"74cde8f6bab811e69b53acbc32b17109", "title": "Spotify Playlists To Fuel Your Coding And Design Sessions - Smashing Magazine", "image": "https://storage.googleapis.com/brydge-assets/crawler/0CA08AFF8EA8A4B9336513286F212E0B/image", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"622ad9baad3a11e68f6eacbc32b17109", "title": "The Commodification Of Meditation", "image": "https://storage.googleapis.com/brydge-assets/crawler/5A4E0BE90C005494FD74A7E37A311987/image", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"92b3cc64aba911e694c442010af00002", "title": "AWS launches QuickSight business intelligence tool out of preview", "image": "https://storage.googleapis.com/brydge-assets/crawler/C1E542BFB280C6413190A89138782DFC/image", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"c2ef61deab0611e6860f42010af00002", "title": "The Commodification Of Meditation", "image": "https://storage.googleapis.com/brydge-assets/crawler/5A4E0BE90C005494FD74A7E37A311987/image", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"c62533e6a56711e6930242010af00002", "title": "Wall Street Bonuses to Decline", "image": "https://storage.googleapis.com/brydge-assets/crawler/F1391BFF0FED6BE3D1E3A0B9F10D0577/image", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"b1f79112a34011e689a442010af00002", "title": "How Muji Fuels Its Explosive Growth Without Ads", "image": "https://storage.googleapis.com/brydge-assets/crawler/C90B523C8A750EB8F6D5C27C8C4DA4F7/image", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"8f4452dca31c11e6be5e42010af00002", "title": "The Brave New World Of Google's Industrial Design", "image": "https://storage.googleapis.com/brydge-assets/crawler/C244CE6C6994C0D8C17B2D0FB5BABBDC/3064353-poster-p-1-google-takes-on-amazon-with-its-ai-powered-smart-home.jpg", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"2df66f16a0c811e6a83d42010af00002", "title": "Meet the Man Who Led EA's FIFA to the Top of the Video Game World", "image": "https://storage.googleapis.com/brydge-assets/crawler/4EB3D4DBC54D0C2093C4F976CCAB61C6/477259600.jpg", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"1e0233d49f3211e6b2f142010af00002", "title": "Sony's new cameras show just how drastically photography is changing", "image": "https://storage.googleapis.com/brydge-assets/crawler/01340A42665A5CB6A6154A64730F3F8C/sony-rx100-a6500-2979.0.0.jpg", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"eded14ac9f3111e6911742010af00002", "title": "Tech Sexism: The Missing Indian Women of the Internet - The Numbers", "image": "https://storage.googleapis.com/brydge-assets/crawler/844049768B3791A1E66483E1983CC08D/image", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"42a407909c0211e6898eacbc328ff997", "title": "Instant Messaging at LinkedIn: Scaling to Hundreds of Thousands of Persistent Connections on One Machine", "image": "https://storage.googleapis.com/brydge-assets/crawler/7F88B61E7A8636F5665F5BC5594ABBA8/image", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"c1fcff2e9a9511e6aeeb42010af00002", "title": "Web animation using CSS and JavaScript", "image": "https://storage.googleapis.com/brydge-assets/crawler/8E652358402EB69761CA14655CEE6B08/rh_003499_01_other11x_cc.png", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"bc34b0b49a9511e6bf9942010af00002", "title": "The Walt Disney Film Archives. The Animated Movies 1921-1968", "image": "https://storage.googleapis.com/brydge-assets/crawler/4CDCC71855B042BD695927A2F3C53130/disnettop.jpg", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"ea4509de96cd11e6b08642010af00002", "title": "Full Self-Driving Hardware on All Teslas", "image": "https://storage.googleapis.com/brydge-assets/crawler/F22B269DA63086425483B90E0C6328A4/image", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"febaf134902011e6b8ddacbc32b17109", "title": "Google acquired YouTube 10 years ago today", "image": "https://storage.googleapis.com/brydge-assets/crawler/ED4A2D2C7807C5F317FE727956E3F6B8/image", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"daae354a8f8911e687bdacbc32b17109", "title": "Shenzhen: The Silicon Valley of Hardware (Full Documentary) | Future Cities | WIRED", "image": "https://storage.googleapis.com/brydge-assets/crawler/D2ABD5BA4C07DA159B95634124E9E0B8/image", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"ac910a988f8911e6a2a8acbc32b17109", "title": "Rocket Pengwin - Open Your Eyes (Official Video)", "image": "https://storage.googleapis.com/brydge-assets/crawler/C22BC87C9C24E6F12DBD6037D5D05913/image", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { "id":"1f081b948f8911e6894dacbc328ff997", "title": "Amazon Intelligence - Product Listing Optimization", "image": "https://storage.googleapis.com/brydge-assets/crawler/E9920D7C5D26062BF0E3856D35E8D898/image", "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
      ]
      }

*/

@Injectable()

export class TopicService {

  constructor(private http: Http) {}

  findRecord(id){
    return this.http.get(`${topicsURL}/${id}`)
    .map(res=> res.json());
  }
}

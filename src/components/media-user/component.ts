import { Component, Input } from '@angular/core';

@Component({
  selector: 'media-user',
  templateUrl: 'template.html'
})
export class MediaUser {
  @Input() profile: any;

  constructor(
  ) {}

  get title(){
    return this.profile.company ? `${this.profile.position} at ${this.profile.company}` : this.profile.position ;
  }

}

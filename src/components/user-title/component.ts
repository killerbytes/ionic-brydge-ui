import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-title',
  template: `<div class="title">{{title}}</div>`
})
export class UserTitle {
  @Input() profile: any;

  constructor(
  ) {}

  get title(){
    return this.profile.company ? `${this.profile.position} at ${this.profile.company}` : this.profile.position ;
  }

}

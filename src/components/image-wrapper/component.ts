import { Component, Input } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { MenuPage } from '../../pages/menu/page';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'image-wrapper',
  template: `<div [style.background-image]="getSafeUrl()" class="image-wrapper">
              <img [src]="url || '' " alt="">
              <ng-content></ng-content>
            </div>`
})
export class ImageWrapper {
  @Input() url: any;

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  getSafeUrl(){
    return this.sanitizer.bypassSecurityTrustStyle(`url(${this.url || '' })`);
  }

}

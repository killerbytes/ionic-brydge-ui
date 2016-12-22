import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { LoadingController } from 'ionic-angular';

@Injectable()

export class LoadingService {
  loading;
  constructor(
    private sanitizer: DomSanitizer,
    private loadingCtrl: LoadingController
  ) {

    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    })
  }

  show(visible){
    visible ? this.loading.present() : this.loading.dismiss();
  }

}

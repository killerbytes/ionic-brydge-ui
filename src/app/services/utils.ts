import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Injectable()

export class UtilsService {
  constructor(
    private sanitizer: DomSanitizer
  ) {}

  getSafeUrl(url=''){
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }

}

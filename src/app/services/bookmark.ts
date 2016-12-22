import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HOST, NAMESPACE } from './config';
import 'rxjs/Rx';

let URL = HOST +  NAMESPACE + 'bookmarks';


@Injectable()

export class BookmarkService {

  constructor(private http: Http) {}

  findAll(){
    return this.http.get(`${URL}`)
    .map(res=> res.json());
  }
}

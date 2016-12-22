import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HOST, NAMESPACE } from './config';
import 'rxjs/Rx';

let URL = HOST +  NAMESPACE + 'story';

@Injectable()

export class StoryService {

  constructor(private http: Http) {}

  findRecord(id){
    return this.http.get(`${URL}/${id}`)
    .map(res=> res.json());
  }
}

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


@Injectable()

export class TopicService {

  constructor(private http: Http) {}

  findAll(){
    return this.http.get(`${topicsURL}`)
    .map(res=> res.json());
  }

  findRecord(id){
    return this.http.get(`${topicsURL}/${id}`)
    .map(res=> res.json());
  }
}

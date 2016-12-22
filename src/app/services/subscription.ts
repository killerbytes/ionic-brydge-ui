import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HOST, NAMESPACE } from './config';
import 'rxjs/Rx';

let URL = HOST +  NAMESPACE + 'subscriptions';


@Injectable()

export class SubscriptionService {

  constructor(private http: Http) {}

  findAll(){
    return this.http.get(`${URL}`)
    .map(res=> res.json());
  }
}

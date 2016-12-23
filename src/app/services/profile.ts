import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HOST, NAMESPACE } from './config';
import 'rxjs/Rx';

let me = HOST +  NAMESPACE + 'me';
let URL = HOST +  NAMESPACE + 'profile';


@Injectable()

export class ProfileService {

  constructor(private http: Http) {}

  me(){
    return this.http.get(`${me}`)
    .map(res=> res.json());
  }

  findRecord(id){
    return this.http.get(`${URL}/${id}`)
    .map(res=> res.json());
  }

  query(id=12, type){
    return this.http.get(`${URL}/${id}/${type}`)
    .map(res=> res.json());
  }

}

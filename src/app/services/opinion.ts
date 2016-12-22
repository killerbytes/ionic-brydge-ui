import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HOST, NAMESPACE } from './config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

let URL = HOST +  NAMESPACE + 'opinions';

export class Profile {
  id: number;
  first_name: string;
  last_name: string;
}

export class Opinion {
  id: number;
  content: string;
  replies: number;
  profile: Profile;
  get test(){
    console.log('test');
    return "123";
  }
}



@Injectable()

export class OpinionService {

  constructor(private http: Http) {}

  query(id):Observable<Opinion[]>{
    return this.http.get(`${URL}/${id}`)
    .map(res=> res.json());
  }

}

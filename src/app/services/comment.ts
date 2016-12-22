import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HOST, NAMESPACE } from './config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

let URL = HOST +  NAMESPACE + 'comments';

export class Profile {
  id: number;
  first_name: string;
  last_name: string;
}

export class Comment{
  id: number;
  content: string;
  profile: Profile;
}



@Injectable()

export class CommentService {

  constructor(private http: Http) {}

  query(id):Observable<Comment[]>{
    return this.http.get(`${URL}/${id}`)
    .map(res=> res.json());
  }

}

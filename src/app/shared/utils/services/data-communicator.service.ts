import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Params} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicatorService {

  constructor(private http: HttpClient) { }

  getComments(params?: Params) {
    return this.http
      .get('https://jsonplaceholder.typicode.com/comments', {
        params
      })
      .pipe(
        retry(3)
      );
  }

  getComment(id: number) {
    return this.http
      .get(`https://jsonplaceholder.typicode.com/comments/${id}`);
  }
}

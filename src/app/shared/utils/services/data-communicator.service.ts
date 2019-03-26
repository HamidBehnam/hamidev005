import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicatorService {

  constructor(private http: HttpClient) { }

  getComments() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts/1/comments')
      .pipe(
        retry(3)
      );
  }
}

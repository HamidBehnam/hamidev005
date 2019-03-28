import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Params} from '@angular/router';
import {HttpErrorHandlerService} from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicatorService {

  constructor(private http: HttpClient,  private httpErrorHandler: HttpErrorHandlerService) { }

  getComments(params?: Params) {
    return this.http
      .get('https://jsonplaceholder.typicode.com/comments', {
        params
      })
      .pipe(
        retry(3),
        catchError(this.httpErrorHandler.handleError)
      );
  }

  getComment(id: number) {
    return this.http
      .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .pipe(
        catchError(this.httpErrorHandler.handleError)
      );
  }

  gerOrganizations() {
    return this.http
      .get('/assets/data/organizations/organizations.json')
      .pipe(
        retry(3),
        catchError(this.httpErrorHandler.handleError)
      );
  }

  getOrganization(id: number) {
    return this.http
      .get(`/assets/data/organizations/organizations${id}.json`)
      .pipe(
        catchError(this.httpErrorHandler.handleError)
      );
  }
}

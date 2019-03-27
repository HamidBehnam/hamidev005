import { Injectable } from '@angular/core';
import {throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor() { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error
      console.error('An error occurred:', error.error.message);
    } else {

      // The backend error
      console.error(
        `Backend returned code ${error.status}, ` +
        `response body was: ${error.error}`);
    }
    // returns an observable
    return throwError(
      'Something bad happened; please try again later.');
  };
}

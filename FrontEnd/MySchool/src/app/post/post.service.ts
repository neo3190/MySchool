import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from './post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURL = "http://localhost:8080";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  find(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.apiURL + '/userAuthentication?' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}

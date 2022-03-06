import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyschoolserviceService {
baseURL="http://localhost:8080/api/v1/userAuthentication";


  constructor(private httpClient:HttpClient) { }

  userAuthentication():Observable<String>{
    return this.httpClient.get<String>('${this.baseURL}');
  }
}

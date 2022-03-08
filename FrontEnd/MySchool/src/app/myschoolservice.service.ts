import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyschoolserviceService {
baseURL="http://localhost:8080/api/v1/userAuthentication?usercredential=";


  constructor(private httpClient:HttpClient) { }

  userAuthentication(Username:string, Password:string){
    return this.httpClient.get(this.baseURL+Username+','+Password);
  }
}

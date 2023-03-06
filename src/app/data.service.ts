import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}
   showUserData():Observable<any> {
    return this.http.get<any>('https://dummyjson.com/todos/random')
  }
}

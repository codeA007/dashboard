import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import * as Options from '../../assets/config.json';


const httpOptions = {
  headers: new HttpHeaders({
    'token':localStorage.getItem('token')||''
  }),
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  superAdmin:boolean=false;
  admin:boolean=false;
  user:boolean=false;

  constructor(private http: HttpClient) {}
   createAccount(data: any):Observable<any> {
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/create_account`,data)
  }

  loginAccount(data:any):Observable<any> {
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/login`,data)
  }

  verifyToken():Observable<any>{
    return this.http.get<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/login`,httpOptions)
  }
}

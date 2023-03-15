import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import * as Options from '../../assets/config.json';




@Injectable({
  providedIn: 'root'
})

export class AuthService {
  superAdmin:boolean=false;
  admin:boolean=false;
  user:boolean=false;
  token:any='';

  httpOptions = {
    headers: new HttpHeaders({
      Authorization:`Bearer ${this.token}`,
    }),
  }
 

  constructor(private http: HttpClient) {}
   createAccount(data: any):Observable<any> {
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/create_account`,data)
  }

  loginAccount(data:any):Observable<any> {
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/login`,data)
  }

  verifyToken():Observable<any>{
    let header = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('token'));
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/verifyToken`,null,{headers:header})
  }

  logout():Observable<any>{
    let header = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('token'));
    console.log(this.token,"token")
    // console.log(this.http.post<any>(`http://${ (Options as any).default.ip}));
   return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/logout`,null,{headers:header})
  }
}

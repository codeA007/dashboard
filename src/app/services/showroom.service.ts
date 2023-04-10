import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import * as Options from '../../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class ShowroomService {

  constructor(private http: HttpClient) { }

  addDealership(data:any):Observable<any>{
    let header = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('token'));
    console.log(localStorage.getItem('token'))
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/addDealership`,data,{headers:header})
  }
  addShowroom(data:any):Observable<any>{
    let header = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('token'));
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/addShowroom`,data,{headers:header})
  }

  getDealerships():Observable<any>{
    let header = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('token'));
    return this.http.get<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/getDealerships`,{headers:header})
  }

  getShowroomsList():Observable<any>{
    let header = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('token'));
    return this.http.get<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/showShowroomsList`,{headers:header})
  }
  startANPR(data:any):Observable<any>{
    let header = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('token'));
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/start`,data,{headers:header})
  }
  getSuperAdminShowrooms(data:any):Observable<any>{
    let header = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('token'));
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/getShowrooms`,data,{headers:header})
  }
}

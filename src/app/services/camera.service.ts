import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as Options from '../../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private http: HttpClient) { }
  addCamera(data:Object):Observable<any>{
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/addCamera`,data)
  }
  checkCamera():Observable<any>{
    return this.http.get<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/checkcamera`)
  }
  editCamera(data:Object):Observable<any>{
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/editCamera`,data)
  }
 viewCamera():Observable<any>{
    return this.http.get<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/viewCamera`)
  }
  deleteCamera(data:Object):Observable<any>{
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/deleteCamera`,data)
  }
geoFencing(data:Object):Observable<any>{
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/geoFencing`,data)
  }
  getCoordinates(data:Object):Observable<any>{
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/getCoordinates`,data)
  }
}

import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as Options from '../../assets/config.json';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization:`Bearer ${localStorage.getItem('token')}`
  }),
}
@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private http: HttpClient) { }
  addCamera(data:Object):Observable<any>{
    let header = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('token'));
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/addCamera`,data,{headers:header})
  }
  checkCamera():Observable<any>{
    return this.http.get<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/checkcamera`)
  }
  editCamera(data:Object):Observable<any>{
    let header = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('token'));
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/editCamera`,data,
    {headers:header})
  }
 viewCamera():Observable<any>{
  let header = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('token'));
    return this.http.get<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/viewCamera`,{headers:header})
  }
  deleteCamera(data:Object):Observable<any>{
    let header = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('token'));
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/deleteCamera`,data,{headers:header})
  }
geoFencing(data:Object):Observable<any>{
  let header = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('token'));
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/geoFencing`,data,{headers:header})
  }
  getCoordinates(data:Object):Observable<any>{
    let header = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('token'));
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/getCoordinates`,data,{headers:header})
  }

  uploadFile(data:any):Observable<any>{
    console.log(data,'....');
    // const endpoint = 'your-destination-url';
    // const formData: FormData = new FormData();
    // formData.set('fileKey', data,);
    // console.log(formData);
    
    return this.http.post<any>(`http://${ (Options as any).default.ip}:${(Options as any).default.port}/uploadfile`,data)
  }

  // downloadFile(){
  //   this.http.get
  // }
}

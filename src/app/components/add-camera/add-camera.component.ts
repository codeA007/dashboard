import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,FormControlName,Validators } from '@angular/forms';
import{CameraService} from '../../services/camera.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-add-camera',
  templateUrl: './add-camera.component.html',
  styleUrls: ['./add-camera.component.css']
})
export class AddCameraComponent {
  constructor(private cameraService: CameraService,private router:Router) {}
  disableBtn:any = false;
  brandName='Brand Name';
  errorMessage = '';
  color='';
  check='';
  errorDisplayStatus = false;
//   SCW_line
// SCW_NVR
// SCW_networker
// Axis
// Hanwha_camera
// Hanwha_NVR
// Hikvision
// Dahua
// Arecont
// Pelco
// ACTI
// UNV_camera
// UNV_NVR
// Swann
  names=[
    {
      name:'Axis'
    },
    {
      name:'SCW_line'
    },
    
    {
      name:'SCW_networker'
    },
  ]
addCamera = new FormGroup(
{  
  ipaddress: new FormControl(''),
  username:new FormControl(''),
  password:new FormControl(''),
  port: new FormControl(''),
  // brand:new FormControl(''),
  cameraname:new FormControl(''),
  department:new FormControl(''),
  RTSP: new FormControl(''),
// cameraName2:new FormControl('')
});
// addRtps = new FormGroup({

// }); 

submit(){
  // console.log({...this.addCamera.value ,brandName:this.brandName});
  // ({...this.addCamera.value ,brand:this.brandName});
  // console.log(this.addCamera.value);
  let addCamera2 = {...this.addCamera.value ,brand:this.brandName}
  console.log(addCamera2);
  
  
  this.cameraService.addCamera(addCamera2).subscribe(data=>{
    console.log(data);
    this.color = 'green';
    this.check = data.result;
    setTimeout(()=>{
      this.color = '';
      this.check = ''
    },1000)
    if(data.result == 'Successfully added camera!'){
      this.router.navigate(['/viewCamera']);
    }
  },(err)=>{
    // console.log(err);
    
    this.errorMessage = err.statusText;
    this.errorDisplayStatus = true;
    if(err.error.msg=='Token has expired'){
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  });
}

brand(brandName:any){ 
  console.log(brandName);
  this.brandName =  brandName; 
}
rtps(){
  console.log(this.addCamera.value.RTSP?.length);
  if(this.addCamera.value.RTSP!.length >=1 && this.addCamera.value.ipaddress!.length>=1){
    this.disableBtn =true;
  }
  else{
    this.disableBtn =false;
  }
}
// rtps(){
//   // console.log(this.addRtps.value.rtps?.length);
//   // let a = ;
//   if(this.addRtps.value.cameraName2?.length!>0||this.addRtps.value.rtps?.length!>0){
    
//     this.disableBtn = true;
//     console.log(this.disableBtn);
    
//   }
//   else{
//     this.disableBtn = false;
//   }
// }
// rtpsBtn(){
//   console.log(this.addRtps.value);
  
// }
}

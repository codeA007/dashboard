import { Component,OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import{CameraService} from '../../services/camera.service';
import { faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';

@Component({
  selector: 'app-view-camera',
  templateUrl: './view-camera.component.html',
  styleUrls: ['./view-camera.component.css']
})
export class ViewCameraComponent implements OnInit {
  // constructor(private cameraService:CameraService){}
  check?:String='';
  color:String='';
  faEdit=faEdit;
  faTrash=faTrash;
  cameraname?:String;
  ipaddress?:String;
  department?:String;
  displayStatus= false;
  id:any;
  show?:boolean;
  datas?:Array<any>;
  timer?:any;
  errorMessage = 'error';
  errorDisplayStatus = false;
  editCameraForm = new FormGroup({
    cameraname:new FormControl(''),
    ipaddress:new FormControl(''),
    department:new FormControl(''),
  });
  ngOnInit(){
    this.show = true;
    this.cameraService.viewCamera().subscribe((data)=>{
      this.datas=data
      console.log(this.datas);
      this.show = false;
    },(err)=>{
      this.errorMessage = err.statusText+'😢😥';      
      this.errorDisplayStatus = true;
      this.show = false;
    })

    // this.timer = setInterval(()=>{
    //   this.cameraService.viewCamera().subscribe((data)=>{
    //     this.datas=data
    //     console.log(this.datas);
    //     this.show = false;
    //   },(err)=>{
    //     this.errorMessage = err.statusText+'😢😥';      
    //     this.errorDisplayStatus = true;
    //     this.show = false;
    //   })
    // },6000)

  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
 
  // datas = [
  //   {
  //     // brandName:'BrandName',
  //     cameraname:'CameraName',
  //     ipaddress:'IPAddress',
  //     department:'Department1',
  //     img:'https://i.pinimg.com/550x/51/cd/70/51cd706189a8f933e01154330ce7bd21.jpg',
  //     cam_status:'on'
  //   },
  //   {
  //     // brandName:'BrandName',
  //     cameraname:'Ca',
  //     ipaddress:'IPAddress',
  //     department:'Department2',
  //     img:'https://i.pinimg.com/550x/51/cd/70/51cd706189a8f933e01154330ce7bd21.jpg',
  //     cam_status:'on'
  //   },
  // ]
  constructor(private router: Router,private cameraService:CameraService ) {}
geoFencing(data:any){
  console.log('clicked')
  this.router.navigate(['editImage'],{
    queryParams:{id:data._id}
  })
}
checkCamera(){
this.cameraService.checkCamera().subscribe(data =>{
  console.log(data);
  if(data.result =='Camera is working'){
    this.check = data.result;
    this.color = 'green';
  }
  else{
    this.check = data.result;
    this.color = 'red';
  }

  setTimeout(()=>{
    this.check =''
  },1000)
},(err)=>{
  this.errorDisplayStatus = true;
  this.errorMessage = err.message;
  if(err.status == 400){
    this.errorMessage ='Bad Request Please Try Again 🔁';
  }
})

}

editCamera(data:any){
  console.log(data);
  this.id = data._id;
  console.log(this.editCameraForm.value);
  // this.editCameraForm.value.cameraName = 'sdfsdfsdgsdg'
  this.cameraname = data.cameraname;
  this.ipaddress = data.ipaddress;
  this.department= data.department;
  this.displayStatus = true;
}

editDone(){
this.displayStatus = false;
console.log(this.editCameraForm.value);
let newData = {...this.editCameraForm.value,id:this.id}
this.cameraService.editCamera(newData).subscribe((data)=>{
  console.log(data,"data");
  this.datas = data
})
}
retry(){
  console.log('retry');
  this.errorDisplayStatus = false;
  this.ngOnInit();
}

deleteCamera(data:any){
 let  id=data._id;
 console.log(id,"id");
 let req={
  id:data._id
 }
  this.cameraService.deleteCamera(req).subscribe((data)=>{
    console.log(data);
    this.datas = data
  },(err)=>{
    console.log(err); 
  })
}

}

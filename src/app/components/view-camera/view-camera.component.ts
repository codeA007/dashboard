import { Component,OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import{CameraService} from '../../services/camera.service';
import { faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';
// import { Router } from '@angular/router';
import * as Options from '../../../assets/config.json';
import { ShowroomService } from '../../services/showroom.service';
// import * as Options from '../../../assets/config.json';

@Component({
  selector: 'app-view-camera',
  templateUrl: './view-camera.component.html',
  styleUrls: ['./view-camera.component.css']
})
export class ViewCameraComponent implements OnInit,OnDestroy {
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
  names=[]
  showroomName:String='Select ShowRoomName';
  name='Admin'
  showSideBar= true;
  show?:boolean;
  datas:any[]=[];
  timer!: NodeJS.Timer;;
  errorMessage = 'error';
  searchRoute= '';
  viewCameraRoute='';
  resultsRoute='';
  home=''
  time =(Options as any).default.viewCameraTimer
  errorDisplayStatus = false;
  editCameraForm = new FormGroup({
    cameraname:new FormControl(''),
    ipaddress:new FormControl(''),
    department:new FormControl(''),
  });
  ip=`http://${(Options as any).default.ip}:${(Options as any).default.port}`;
  constructor(private router: Router,private cameraService:CameraService,private showroomService:ShowroomService ) {}
  ngOnInit(){
    if(this.router.url == '/user/search'||this.router.url =='/user/viewCamera'|| this.router.url =='/user/results'){
      console.log(this.router.url,"url");
      this.showSideBar = false;
      this.name = 'User';
      this.name = 'User'
      this.searchRoute='/user/search';
      this.viewCameraRoute = '/user/viewCamera'
      this.resultsRoute='/user/results'
      this.home='/user'
    }
    else{
      this.searchRoute='/admin/search';
      this.viewCameraRoute = '/admin/viewCamera'
      this.resultsRoute='/admin/results';
      this.home='/admin';
    }
    if(this.router.url == '/admin/viewCamera'){
    this.show = true;
    console.log(`Bearer ${localStorage.getItem('token')}`);
    this.showroomService.getShowroomsList().subscribe((data)=>{
      this.names = data.showrooms;
      console.log(data);
      this.show=false;
    })
  }
  else if(this.router.url == '/user/viewCamera'){
    this.show = true;
    let data={
      showroomName:''
    }
    this.timer = setInterval(()=>{
      this.cameraService.viewCamera(data).subscribe((data)=>{
        this.show=false;
        
        this.datas=data
        console.log(this.datas);
        this.show = false;
      },(err)=>{
        this.errorMessage = err.statusText+'😢😥';      
        this.errorDisplayStatus = true;
        this.show = false;
        this.ngOnDestroy();
        if(err.error.msg=='Token has expired'){
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
          this.ngOnDestroy()
        }
      })
    },this.time)
  }
    // this.cameraService.viewCamera().subscribe((data)=>{
    //   this.datas=data
    //   console.log(this.datas);
    //   this.show = false;
    // },(err)=>{
    //   this.errorMessage = err.statusText+'😢😥';      
    //   this.errorDisplayStatus = true;
    //   this.show = false;
    //     if(err.error.msg=='Token has expired'){
    //       localStorage.removeItem('token');
    //       this.router.navigate(['/login']);
    //     }
    // },)

    console.log(this.timer);
    

  }
  totalRecords:any = this.datas.length;
  page=1
  ngOnDestroy() {
    clearInterval(this.timer);
    console.log(this.timer);
  }
  showroom(name:any){
    this.ngOnDestroy();
    this.showroomName = name;
    let data={
      showroomName:this.showroomName
    }
    this.show=true
    console.log(this.showroomName,"names..");
    
    this.timer = setInterval(()=>{
      this.cameraService.viewCamera(data).subscribe((data)=>{
        this.show=false;
        console.log(this.showroomName,"timmer");
        
        this.datas=data
        console.log(this.datas);
        this.show = false;
      },(err)=>{
        this.errorMessage = err.statusText+'😢😥';      
        this.errorDisplayStatus = true;
        this.show = false;
        this.ngOnDestroy();
        if(err.error.msg=='Token has expired'){
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
          this.ngOnDestroy()
        }
      })
    },this.time)

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
  },2000)
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
  let newData = {...this.editCameraForm.value,id:this.id,showroomName:this.showroomName}
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
  id:data._id,
  showroomName:this.showroomName
 }
  this.cameraService.deleteCamera(req).subscribe((data)=>{
    console.log(data);
    this.datas = data
  },(err)=>{
    console.log(err); 
  })
}

}

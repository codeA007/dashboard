import { Component,OnInit } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd} from 'ngx-daterangepicker-material';
import { DatePipe, JsonPipe } from '@angular/common';
// import{CameraService} from '../../services/camera.service';
import dayjs from 'dayjs/esm';
import { faBars,faCameraRetro,faPoll,faList,faSearch} from '@fortawesome/free-solid-svg-icons';
import { Router,ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ShowroomService } from '../../services/showroom.service';
import { CameraService } from '../../services/camera.service';
import * as Options from '../../../assets/config.json';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit{
  selected: { startDate: dayjs.Dayjs |any; endDate: dayjs.Dayjs |any}; 
  search = faSearch;
  showSideBar= true;
  name='Admin';
  showroomName:String='Select ShowRoomName';
  names=[]
  datas:any[]=[];
  page = 1;
  showImg ='false';
  imgUrl = '';
  err='';
  check?:String='';
  color:String='';
  searchRoute= '';
  viewCameraRoute='';
  resultsRoute='';
  home='';
  pa!:any;
  ip=`http://${(Options as any).default.ip}:${(Options as any).default.port}`;
constructor(private router: Router,private route:ActivatedRoute,private datePipe:DatePipe,private showroomService:ShowroomService,private cameraService:CameraService){
  // selectedMoments: { startDate: Moment | any, endDate: Moment | any }
  this.selected = {
    startDate: dayjs('2023-01-01T00:00Z'),
    endDate: dayjs('2023-02-20T00:00Z')
  };
}
ngOnInit(): void {
  this.showroomService.getShowroomsList().subscribe((data)=>{
    this.names = data.showrooms;
    console.log(data);
    this.pa = this.router.url;
  }) 
  if(this.router.url == '/user/search'||this.router.url =='/user/viewCamera'|| this.router.url =='/user/results'){
    console.log(this.router.url,"url");
    this.showSideBar = false;
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
}
submit(){
  if(this.router.url == '/admin/search'){
  if(this.showroomName=='Select ShowRoomName'){
    this.check='please Select showroom Name';
    this.color='red';
    setTimeout(()=>{
      this.check='';
      this.color=''
    }
    ,2000)
    return
  }
}
  let startD  = this.datePipe.transform(this.selected.startDate.$d,'YYYY-MM-dd');
  let endD  = this.datePipe.transform(this.selected.endDate.$d,'YYYY-MM-dd');
  let name;
  // let endDate = this.selected.endDate.$d;
  // console.log(startD);
  console.log(this.pa);
  
  if(this.pa == '/admin/search'){
    name = this.showroomName
  }
  else{
    name='';
  }
  let data={
    showroomName:name,
    startDate:startD,
    endDate:endD
  }
  console.log(data,"search");
  
  // let s = this.datePipe.transform(startD,'YYYY-MM-dd'); 
  console.log(data);
  this.showroomService.getSearchResults(data).subscribe(data=>{
    console.log(data);
    if(data.result == 'No vehicles found'){
      this.err = 'NO RESULTS FOUND...'
      this.datas = [];
      return
    }
    else{
      this.err =''
      this.datas = data
    }
  },(err)=>{
    this.err=err.message;
  })
}
showroom(name:any){
  this.showroomName = name;
}
totalRecords:any = this.datas.length;
   bigImage(image:any){
    console.log(image);
    this.showImg ='true'
    this.imgUrl = this.ip+'/getNumberplate/'+image.NP_img_path;
    console.log(this.showImg);
   }

   vImage(image:any){
    console.log(image);
    this.showImg ='true'
    this.imgUrl = this.ip+'/getVehicle/'+image.vehicle_img_path;
    console.log(this.showImg);
   }

   hideModle(e:any){
  
    if(e.target.className=='modalBoxContainer'||e.target.className=='modalContainer'){
      this.showImg ='false';
}
 }
}

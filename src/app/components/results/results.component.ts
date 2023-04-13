import { Component,OnInit} from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd} from 'ngx-daterangepicker-material';
import { DatePipe, JsonPipe } from '@angular/common';
import { faFile} from '@fortawesome/free-solid-svg-icons';
import{CameraService} from '../../services/camera.service';
import { ShowroomService } from '../../services/showroom.service';
import dayjs from 'dayjs/esm';
import { Router,ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
// import { saveAs } from 'file-saver';
import {saveAs} from 'file-saver';
// import { CameraService } from '../../services/camera.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  // constructor(){}
  file!:any;
  showroomName: any='select showroom';
  names=[];
  showSideBar= true;
  fileIcon=faFile
  color='';
  check: any;
  name='Admin';
  searchRoute= '';
  viewCameraRoute='';
  resultsRoute='';
  home=''
  
fileUpload(event:any){
  this.file =event.target.files[0]; 
  console.log(event.target.files);
}
selected: { startDate: dayjs.Dayjs |any; endDate: dayjs.Dayjs |any };
  constructor(private cameraService:CameraService, private showRoomService:ShowroomService,private router:Router,private datePipe:DatePipe) {
    this.selected = {
      startDate: dayjs('2023-01-01T00:00Z'),
      endDate: dayjs('2023-02-20T00:00Z')
    };
  }
  ngOnInit(): void {
    if(this.router.url == '/user/search'||this.router.url =='/user/viewCamera'|| this.router.url =='/user/results'){
      console.log(this.router.url,"url");
      this.showSideBar = false;
      this.name = 'User';
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
    this.showRoomService.getShowroomsList().subscribe((data)=>{
      this.names = data.showrooms;
      console.log(data);
    }) 
  }
submit(){
  let data = {
    // file:this.file,
    // date:this.model
  }
  let startD  = this.datePipe.transform(this.selected.startDate.$d,'YYYY-MM-dd');
  let endD  = this.datePipe.transform(this.selected.endDate.$d,'YYYY-MM-dd');
  const formData: FormData = new FormData();
  formData.append('file',this.file);
  formData.append('company',this.showroomName);
  formData.append('startDate',startD!);
  formData.append('endDate',endD!);
  console.log(startD);
  
  console.log(formData);
  
  this.cameraService.uploadFile(formData).subscribe(data=>{
    console.log(formData);
    if(data){
       this.color = 'green';
    this.check = data.message;
    setTimeout(()=>{
      this.color = '';
      this.check = ''
    },1000)
    }
    console.log(data);
  },(err)=>{
    if(err){
      this.color = 'red';
   this.check = err.message;
   setTimeout(()=>{
     this.color = '';
     this.check = ''
   },1000)
   }
  })
  console.log(this.file); 
}
showroom(name:any){
  this.showroomName = name;
}

downloadFile(){
  // let date = new Date();
  var MyDate = new Date();
  let endD  = this.datePipe.transform(MyDate,'YYYY-MM-dd');
  let date =MyDate.getFullYear() + '-'+ ('0' + (MyDate.getMonth()+1)).slice(-2) + '-'+('0' + MyDate.getDate()).slice(-2)
  let data={
    company:this.showroomName,
    date:endD
  }
 
var MyDateString;

// MyDate.setDate(MyDate.getDate() + 20);

// MyDateString = ('0' + MyDate.getDate()).slice(-2) + '/'
//              + ('0' + (MyDate.getMonth()+1)).slice(-2) + '/'
//              + MyDate.getFullYear();
  // if(date.getMonth() <10 &&  date.getDate() <10){
  //   nDate= `${date.getFullYear()}-0${date.getMonth()}0${date.getDate()}`;
  // }
  // else if(this.model.month <10){
  //   date= `${this.model.year}0${this.model.month}${this.model.day}`;
  // }
  // else if(this.model.day<10){
  //   date= `${this.model.year}${this.model.month}0${this.model.day}`;
  // }
  // else{
  //   date= `${this.model.year}${this.model.month}${this.model.day}`;
  // }
  // let newDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  console.log(date);
  
  this.cameraService.downloadFile(data).subscribe((data:any)=>{
    console.log(data);
    var fileName = date +'exel.xlsx'
    const blob = new Blob([data.body], { type: '.xlsx' });
    saveAs(blob,fileName)
  })
}

}

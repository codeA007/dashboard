import { Component } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd} from 'ngx-daterangepicker-material';
import { JsonPipe } from '@angular/common';
import { faFile} from '@fortawesome/free-solid-svg-icons';
import{CameraService} from '../../services/camera.service';
import dayjs from 'dayjs/esm';
// import { saveAs } from 'file-saver';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  file!:any;
  showroomName: any='select showroom';
  names=[]
  fileIcon=faFile
  
fileUpload(event:any){
  this.file =event.target.files[0]; 
  console.log(event.target.files);
}
selected: { startDate: dayjs.Dayjs; endDate: dayjs.Dayjs };
  constructor(private cameraService:CameraService) {
    this.selected = {
      startDate: dayjs('2023-01-01T00:00Z'),
      endDate: dayjs('2023-02-20T00:00Z')
    };
  }
submit(){
  let data = {
    // file:this.file,
    // date:this.model
  }
  const formData: FormData = new FormData();
  formData.append('file',this.file);
  formData.append('company','KIA');
  console.log(formData);
  
  this.cameraService.uploadFile(formData).subscribe(data=>{
    console.log(data);
  })
  console.log(this.file); 
}
showroom(name:any){
  this.showroomName = name;
}

downloadFile(){
  // let date = new Date();
  var MyDate = new Date();
  let date =MyDate.getFullYear() + '-'+ ('0' + (MyDate.getMonth()+1)).slice(-2) + '-'+('0' + MyDate.getDate()).slice(-2)
  let data={
    company:'KIA',
    date:'2023-04-04'
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

import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';
// import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowroomService } from '../../services/showroom.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
  // standalone: true,
  // imports: [NgbTimepickerModule],
})
export class MailComponent implements OnInit {

  time = { hour: 13, minute: 30 };
constructor(private router: Router,private showroomService:ShowroomService){}
searchRoute= '';
viewCameraRoute='';
resultsRoute='';
displayStatus= false;
home='';
showSideBar= true;
name='Admin';
color='';
check='';
error!:String;
emails=['email@email.com','email@email.com']
ccs=['email@email.com','email@email.com']
mailDetails = new FormGroup({
  senderMail:new FormControl(''),
  password:new FormControl(''),
  portNo:new FormControl(''),
  domain:new FormControl(''),
  emails:new FormControl(''),
  ccs:new FormControl(''),
  // time:new FormControl(''),
});
ngOnInit(): void {
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

mail(){
console.log(this.mailDetails.value);
}
add(){
  this.displayStatus = true
}

submit(){
  let emails =this.mailDetails.value.emails?.split(",");
  let ccs =this.mailDetails.value.ccs?.split(",");
 let time = this.time.hour + ":"+this.time.minute;
 if(this.mailDetails.value.emails==''||this.mailDetails.value.senderMail==''||this.mailDetails.value.password==''||this.mailDetails.value.portNo||this.mailDetails.value.domain==''){
  this.error='Please Fill details Correctly!!'
  return
 }
  let data={
    emails:emails,
    ccs:ccs,
    time:time,
    senderMail:this.mailDetails.value.senderMail,
    password:this.mailDetails.value.password,
    port:this.mailDetails.value.portNo,
    domain:this.mailDetails.value.domain,
  }
  console.log(data);
  this.displayStatus =  false;
  this.showroomService.sendMailDetails(data).subscribe(data=>{
    this.color = 'green';
    this.check = data.result;
    setTimeout(()=>{
      this.color = '';
      this.check = ''
    },1000)
  },(err)=>{
    this.color = 'red';
    this.check = 'error Please Try Again!!';
    setTimeout(()=>{
      this.color = '';
      this.check = ''
    },1000)
  })
}
}

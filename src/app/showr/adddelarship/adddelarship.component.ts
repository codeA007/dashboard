import { Component } from '@angular/core';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';
import { ShowroomService } from '../../services/showroom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddelarship',
  templateUrl: './adddelarship.component.html',
  styleUrls: ['./adddelarship.component.css']
})
export class AdddelarshipComponent {
  errorMessage: any;
  emessage='';
  errorDisplayStatus=false;
  constructor(private showroomService:ShowroomService ,private router:Router){}
  addShowroom =new FormGroup({
    dealershipName:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
  });

  submitShowroomDetails(){
    console.log(this.addShowroom.value)
    if(this.addShowroom.value.dealershipName==''||this.addShowroom.value.email==''||this.addShowroom.value.password==''){
      this.emessage='Please fill all details';
      return
    }
    this.showroomService.addDealership(this.addShowroom.value).subscribe((data)=>{
      if(data.result == 'Dealership added successfully'){
        this.router.navigate(['/showrooms']);
      }
    },(err)=>{
      this.errorMessage = err.statusText;
      this.errorDisplayStatus = true;
      if(err.error.msg=='Token has expired'){
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    })    
  }
}

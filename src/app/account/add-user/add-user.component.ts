import { Component } from '@angular/core';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  addUser =new FormGroup({
    username:new FormControl(''),
    email: new FormControl(''),
    password:new FormControl(''),
    showroomName:new FormControl(''),
  });
  submitShowroomDetails(){
    console.log(this.addUser.value);
    
    // let newData = {...this.addShowroom.value,latitiude:this.latitude,longitude:this.longitude};
  //  console.log(newData)
  // console.log(this.authService.superAdmin);
  // this.authService.loginAccount(this.addShowroom.value).subscribe(data=>{
  //   console.log(data);
  // })
  }
}

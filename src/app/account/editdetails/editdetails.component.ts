import { Component } from '@angular/core';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent {
  selectedLevel!:string;
  data = [
    {id: 0, name: "name1"},
    {id: 1, name: "name2"}
];
selected(){
  console.log(this.registerForm.value)
}
  registerForm = new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    mailid:new FormControl(''),
    phonenumber: new FormControl(''),
    showroom:new FormControl(''),
    // post:new FormControl(''),
    designation:new FormControl(''),
  })
  constructor(private authService: AuthService,private router:Router){}
ngOnInit(): void {
  console.log(this.authService.superAdmin);
}

createAccount() {
  console.log(this.registerForm.value);
  
  // console.log(this.registerForm.value);
  // this.authService.createAccount(this.registerForm.value).subscribe(data=>{
  //   console.log(data);
  // });
  // this.authService.superAdmin=true;
  // this.router.navigate(['/']);
}
}

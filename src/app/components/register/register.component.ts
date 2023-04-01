import { Component,OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selectedLevel!:string;
  data = [
    {id: 0, name: "SuperAdmin"},
    {id: 1, name: "Admin"},
    {id: 1, name: "User"},
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
  this.authService.createAccount(this.registerForm.value).subscribe(data=>{
    console.log(data);
  });
  // this.authService.superAdmin=true;
  // this.router.navigate(['/']);
}
}

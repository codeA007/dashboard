import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit   {
 username = "username"
 faAddressCard = faAddressCard;
  constructor(private authService: AuthService,private router:Router) {
  }
  addTodo = new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
 });
  ngOnInit(){ 
    if(localStorage.getItem('token') ){
        this.authService.admin =true;
      this.router.navigate(['/admin']);
    }
  }

 add(){
  console.log(this.addTodo.value);
  this.authService.loginAccount(this.addTodo.value).subscribe(data=>{
    console.log(data);
    localStorage.setItem('token',data.access_token);
    // localStorage.setItem('designation',data.access_token);
    if(data.designation=='User'){
      this.authService.user =true;
      this.router.navigate(['/user']);
    }
    else if(data.designation=='Admin'){
      this.authService.admin =true;
      this.router.navigate(['/admin']);
    }
    else if(data.designation=='SuperAdmin'){
      this.router.navigate(['/showrooms']);
    }
    // if(data.result == 'Login successful!'){
    // this.authService.admin =true;
    // if(this.authService.superAdmin ==true){
    //   this.router.navigate(['/showrooms']);
    // }
    // else if(this.authService.admin ==true){
    //   this.router.navigate(['/admin']);
    // }
    // else if(this.authService.user==true){
    //   this.router.navigate(['/user']);
    // }
  // }
  });
}
  
  //  if(data.result == 'Successful'){
  //   this.authService.admin =true;
  //   if(this.authService.superAdmin ==true){
  //     this.router.navigate(['/showrooms']);
  //   }
  //   else if(this.authService.admin ==true){
  //     this.router.navigate(['/admin']);
  //   }
  //   else if(this.authService.user==true){
  //     this.router.navigate(['/user']);
  //   }
  // // }
  // }
}

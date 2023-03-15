import { Component,Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: AuthService,private router: Router){ }
@Input() name!:string;
faUser=faUser;

logout(){
  this.authService.token =  localStorage.getItem('token');
  console.log(this.authService.token,"logout");
  
this.authService.superAdmin = false; 
this.authService.admin = false; 
this.authService.user = false;

this.authService.logout().subscribe((data)=>{
  console.log(data,"logout");
  localStorage.removeItem('token');
  if(data){
    this.router.navigate(['/login']);
  }
},(err)=>{
  if(err.error.msg=='Token has expired'){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
})
}
}

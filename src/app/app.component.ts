import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  constructor(private authService: AuthService,private router: Router){ }
  @Input() name!:string;
  faUser=faUser;
  
  logout(){
  this.authService.superAdmin = false; 
  this.authService.admin = false; 
  this.authService.user = false;
  this.router.navigate(['/login']);
  }
}

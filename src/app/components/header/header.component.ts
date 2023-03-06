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
this.authService.superAdmin = false; 
this.authService.admin = false; 
this.authService.user = false;
this.router.navigate(['/login']);
}
}

import { Component,Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header2',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class NavComponent {
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
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService,private router:Router) {}
  canActivate() {
      if(this.authService.admin==true){
        return true;
      }
      else{
        this.router.navigate(['login']);
      }
      return false;
  }
  
}

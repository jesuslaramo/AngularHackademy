import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PanelGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(){
        if(!this.authService.isAuth()){
            this.router.navigateByUrl('/auth/login');
        }
        return true;
  }
  
}

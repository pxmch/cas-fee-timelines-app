import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {LoginService} from './login.service.ts';
import {LoginStatus} from "./helper/login-status";




@Injectable()
export class LoginGuardService implements CanActivate {

  loginStatus:LoginStatus;

  constructor(private loginService:LoginService, protected router:Router) {
    //this.loginService.loginStatus.subscribe(loginStatus => this.loginStatus = loginStatus);
  }

  /*
   canActivate() {
   if (this.loginStatus.isLoggedIn()) {
   return true;
   }
   this.router.navigate(['login']);
   return false;
   }
   */
  canActivate(route:ActivatedRouteSnapshot,
              state:RouterStateSnapshot):Observable<boolean> {

    return this.loginService.loginStatus
      .map(loginStatus => loginStatus.isLoggedIn())
      .take(1)
      .do(allowed => {
        if (!allowed) {
          this.router.navigate(['/login']);
        }
      });
  }
}

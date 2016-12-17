import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {LoginService} from './login.service.ts';

@Injectable()
export class LoginGuardService implements CanActivate {

  constructor(private loginService:LoginService, protected router:Router) { }

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

import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/Rx";
import {AngularFire} from "angularfire2/angularfire2";
import {LoginStatus} from "./helper/login-status";
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

  loginStatus: BehaviorSubject<LoginStatus> = new BehaviorSubject<LoginStatus>(new LoginStatus(null));

  constructor(private af: AngularFire, private router: Router) {
    this.af.auth.subscribe(
      user => this.changeState(user),
      error => console.log(error)
    );
  }

  login(email:string, password:string) {
    return this.af.auth.login({email, password});
  }

  logout() {
    this.af.auth.logout();
    this.router.navigate([''])
  }

  getUserId() {
    return this.loginStatus.value.getUserId();
  }

  private changeState(user:any = null) {
    if (user) {
      this.loginStatus.next(new LoginStatus(user.uid));
    }
    else {
      this.loginStatus.next(new LoginStatus(null));
    }
  }

}

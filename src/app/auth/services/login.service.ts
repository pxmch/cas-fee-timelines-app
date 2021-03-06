import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/Rx";
import {AngularFire} from "angularfire2/angularfire2";
import {LoginStatus} from "./helper/login-status";
import {Router} from '@angular/router';
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService {

  public loginStatus: BehaviorSubject<LoginStatus> = new BehaviorSubject<LoginStatus>(new LoginStatus(null));
  private userName: '';

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

  signup(email, password): firebase.Promise<any> {
    return this.af.auth.createUser({email, password});
  }

  setupUser(name = 'Anonymous'): firebase.Promise<any> {
    const uid = this.getUserId();
    const itemObservable = this.af.database.object('/users/' + uid);
    return itemObservable.update({alias: name});
  }

  getUserId() {
    return this.loginStatus.value.getUserId();
  }

  getUserName() {
    return this.userName;
  }

  setUserName(userId = '') {
    if(userId != '') {
      this.af.database.object('/users/' + userId).first().subscribe(
        usr => this.userName = usr.alias
      );
    }
    else {
      this.userName = '';
    }
  }

  private changeState(user:any = null) {
    if (user) {
      this.loginStatus.next(new LoginStatus(user.uid));
      this.setUserName(user.uid);
    }
    else {
      this.loginStatus.next(new LoginStatus(null));
      this.setUserName();
    }
  }

}

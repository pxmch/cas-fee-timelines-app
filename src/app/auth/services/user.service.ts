import { Injectable } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2/angularfire2';
import Promise = firebase.Promise;

@Injectable()
export class UserService {

  private isAuth = false;
  private user = {};

  constructor(public af:AngularFire) {
    this.af.auth.subscribe(
      user => this._changeState(user),
      error => console.trace(error)
    );
  }

  public login(userId:string, password:string) {
    return this.af.auth.login(
      {
        email: userId,
        password: password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }
    );
  }

  public logout() {
    return this.af.auth.logout();
  }

  public isLoggedIn() : boolean {
    return this.isAuth;
  }

  private _changeState(user:any = null) {
    if (user) {
      this.isAuth = true;
      this.user = this._getUserInfo(user)
    }
    else {
      this.isAuth = false;
      this.user = {};
      localStorage.removeItem('auth_token');
    }
  }

  private _getUserInfo(user:any) : any {
    if (!user) {
      return {};
    }
    let data = user.auth.providerData[0];
    return {
      name: data.displayName,
      avatar: data.photoURL,
      email: data.email,
      provider: data.providerId
    };
  }

  private _getProvider(from:string) {
    switch (from) {
      case 'password': return AuthProviders.Password;
      case 'twitter': return AuthProviders.Twitter;
      case 'facebook': return AuthProviders.Facebook;
      case 'github': return AuthProviders.Github;
      case 'google': return AuthProviders.Google;
    }
  }

}

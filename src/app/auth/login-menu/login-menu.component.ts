import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {LoginService} from "../services/login.service";
import {LoginStatus} from "../services/helper/login-status";


@Component({
  selector: 'login-menu',
  template: `
            <a *ngIf="loginStatus?.isLoggedIn()" [routerLink]="['/timeline-manager']" routerLinkActive="active">Timeline Manager</a>
            <a *ngIf="loginStatus?.isLoggedIn()" (click)="logout()">Logout</a>
            <a *ngIf="!loginStatus?.isLoggedIn()" [routerLink]="['/login']" routerLinkActive="active">Login</a>
            <a *ngIf="!loginStatus?.isLoggedIn()" [routerLink]="['/signup']" routerLinkActive="active">Registrieren</a>
    `,
  encapsulation: ViewEncapsulation.None
})

export class LoginMenuComponent implements OnInit {

  loginStatus: LoginStatus;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.loginStatus.subscribe(loginStatus => this.loginStatus = loginStatus);
  }

  logout() {
    this.loginService.logout();
  }

}

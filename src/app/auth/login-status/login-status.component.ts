import {Component, ViewEncapsulation} from '@angular/core';
import {AngularFire} from 'angularfire2/angularfire2';
import {Router} from '@angular/router';

import {UserService} from "../services/user.service";

@Component({
  selector: 'login-status',
  template: `
            <a *ngIf="af.auth | async" [routerLink]="['/timeline-manager']" routerLinkActive="active">Timeline Manager</a>
            <a *ngIf="af.auth | async" (click)="logout()">Logout</a>
            <a *ngIf="!(af.auth | async)" [routerLink]="['/login']" routerLinkActive="active">Login</a>
            <a *ngIf="!(af.auth | async)" [routerLink]="['/signup']" routerLinkActive="active">Registrieren</a>
    `,
  encapsulation: ViewEncapsulation.None
})

export class LoginStatusComponent {

  constructor(public af: AngularFire, private userService: UserService, private router: Router) {
    this.af.auth.subscribe();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}

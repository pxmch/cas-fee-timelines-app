import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AuthRouting} from "./auth.routing";
import {LoginStatusComponent} from "./login-status/login-status.component";
import {LoginComponent} from "./login/login.component";
import {LoginGuardService} from "./services/login-guard.service";
import {SignupComponent} from "./signup/signup.component";
import {UserService} from "./services/user.service";

@NgModule({
  imports: [
    CommonModule,
    AuthRouting,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    LoginStatusComponent,
    SignupComponent
  ],
  exports: [
    LoginComponent,
    LoginStatusComponent,
    SignupComponent
  ],
  providers: [
    LoginGuardService,
    UserService
  ]
})
export class AuthModule { }

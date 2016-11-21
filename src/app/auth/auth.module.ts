import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AuthRouting} from "./auth.routing";
import {LoginComponent} from "./login/login.component";
import {LoginGuardService} from "./services/login-guard.service";
import {SignupComponent} from "./signup/signup.component";
import {LoginService} from "./services/login.service.ts";
import { LoginMenuComponent } from './login-menu/login-menu.component';

@NgModule({
  imports: [
    AuthRouting,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    LoginMenuComponent
  ],
  exports: [
    LoginComponent,
    LoginMenuComponent,
    SignupComponent
  ],
  providers: [
    LoginGuardService,
    LoginService
  ]
})
export class AuthModule { }

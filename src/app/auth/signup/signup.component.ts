import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service.ts";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  private message = '';
  private isSignedUp = false;
  private signupForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.signupForm = this.fb.group({
      userName: ['', Validators.required],
      userId: ['', Validators.required],
      passwd: ['', Validators.required],
      passwdconf: ['', Validators.required]
    });

    /* signup form should not be displayed to logged in users */
    this.loginService.loginStatus.subscribe(status => this.isSignedUp = status.isLoggedIn());
  }

  signup() {
    this.message = '';
    const formVal = this.signupForm.value;
    this.loginService.signup(formVal.userId, formVal.passwd).then(
      () => {
        this.message = '';
        this.isSignedUp = true;
        this.loginService.setupUser(formVal.userName);
      },
      err => {
        this.message = 'Registrierung fehlgeschlagen: ' + err.message;
      }
    );
  }

  isFilledCorrectly() {
    const formVal = this.signupForm.value;
    return formVal && formVal.userName && formVal.userId && formVal.passwd && formVal.passwd === formVal.passwdconf;
  }

}

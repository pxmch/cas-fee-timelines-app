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
  private signupForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.signupForm = this.fb.group({
      userName: ['', Validators.required],
      userId: ['', Validators.required],
      passwd: ['', Validators.required],
      passwdconf: ['', Validators.required]
    });
  }

  signup() {
    this.message = '';
    const formVal = this.signupForm.value;
    this.loginService.signup(formVal.userName, formVal.userId, formVal.passwd).then(
      user => {
        console.log(user);
        this.message = 'Registrierung erfolgreich. Sie werden gleich weitergeleitet.';
        this.router.navigate(['login'])
      },
      err => {
        console.log(err);
        this.message = 'Registrierung fehlgeschlagen: ' + err.message;
      }
    );
  }

  isFilledCorrectly() {
    const formVal = this.signupForm.value;
    return formVal && formVal.userName && formVal.userId && formVal.passwd && formVal.passwd === formVal.passwdconf;
  }

}

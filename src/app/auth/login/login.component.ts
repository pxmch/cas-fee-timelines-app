import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service.ts";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})

export class LoginComponent {

  private message = '';
  private loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      userId: ['', Validators.required],
      passwd: ['', Validators.required]
    });
  }

  login() {
    this.message = '';
    const formVal = this.loginForm.value;
    this.loginService.login(formVal.userId, formVal.passwd).then(
      () => {
        this.message = 'Anmeldung erfolgreich. Sie werden gleich weitergeleitet.';
        this.router.navigate(['/timeline-manager'])
      },
      () => {
        this.message = 'Anmeldung fehlgeschlagen. Bitte nochmals probieren.';
      }
    );

  }
}

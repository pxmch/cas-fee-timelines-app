import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from "../services/user.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})

export class LoginComponent {

  private userId = '';
  private passwd = '';
  private message = '';

  constructor(private userService: UserService, private router: Router) {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['/timeline-manager']);
    }
  }

  onSubmit() {
    this.login()
  }

  login() {
    this.message = '';
    this.userService.login(this.userId, this.passwd).then(
      () => { this.message = 'Anmeldung erfolgreich. Sie werden gleich weitergeleitet.'; this.router.navigate(['/timeline-manager'])},
      () => { this.message = 'Anmeldung fehlgeschlagen. Bitte nochmals probieren.'; }
    );
  }
}

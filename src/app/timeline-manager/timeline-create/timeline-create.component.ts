import { Component, OnInit } from '@angular/core';
import {TimelinesService} from "../../shared/model/timelines.service";
import {Router} from "@angular/router";
import {LoginService} from "../../auth/services/login.service";


@Component({
  selector: 'app-timeline-create',
  templateUrl: './timeline-create.component.html',
  styleUrls: ['./timeline-create.component.scss']
})
export class TimelineCreateComponent implements OnInit {

  constructor(private timelinesService: TimelinesService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  save(form) {
    this.timelinesService.createTimeline(this.loginService.getUserId(), this.loginService.getUserName(), form.getFormValue())
      .subscribe(
        val => {
          this.router.navigateByUrl('/timeline-manager/edit/'+val);
        },
        err => alert(`Bei Speichern ist ein Fehler aufgetreten: ${err}`)
      );

  }

}

import { Component, OnInit } from '@angular/core';
import {TimelinesService} from "../../shared/model/timelines.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-timeline-create',
  templateUrl: './timeline-create.component.html',
  styleUrls: ['./timeline-create.component.scss']
})
export class TimelineCreateComponent implements OnInit {

  constructor(private timelinesService: TimelinesService, private router: Router) { }

  ngOnInit() {
  }

  save(form) {
    this.timelinesService.createNewTimeline('-KPio2Etua4oo1i73dfx', form.getFormValue())
      .subscribe(
        () => {
          this.router.navigateByUrl('/timeline-manager');
        },
        err => alert(`Bei Speichern ist ein Fehler aufgetreten: ${err}`)
      );

  }

}

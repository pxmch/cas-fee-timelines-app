import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Timeline} from "../../shared/model/timeline";
import {TimelinesService} from "../../shared/model/timelines.service";

@Component({
  selector: 'timeline-edit',
  templateUrl: './timeline-edit.component.html',
  styleUrls: ['./timeline-edit.component.scss']
})
export class TimelineEditComponent implements OnInit {

  private timeline: Timeline;

  constructor(private timelinesService: TimelinesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(
      data => this.timeline = data['timeline']
    );
  }

  save(form) {
    this.timelinesService.updateTimeline(this.timeline.$key, form.getFormValue())
      .subscribe(
        val => {
          alert("Gespeichert!");
        },
        err => alert(`Bei Speichern ist ein Fehler aufgetreten: ${err}`)
      );

  }


}

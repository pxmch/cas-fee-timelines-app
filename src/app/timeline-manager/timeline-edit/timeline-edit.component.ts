import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Timeline} from "../../shared/model/timeline";
import {Event} from '../../shared/model/event'
import {TimelinesService} from "../../shared/model/timelines.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'timeline-edit',
  templateUrl: './timeline-edit.component.html',
  styleUrls: ['./timeline-edit.component.scss']
})
export class TimelineEditComponent implements OnInit {

  private timeline: Timeline;
  private eventsForTimeline: Observable<Event[]>;

  constructor(private timelinesService: TimelinesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data
      .subscribe(
        data => this.timeline = data['timeline'],
        err => alert(err)
      );

    this.route.params
      .switchMap((params) => this.timelinesService.getEventsForTimeline(params['id']))
      .subscribe((event) => this.eventsForTimeline = event);

    //this.eventsForTimeline = this.timelinesService.getEventsForTimeline(this.route.snapshot.params['id']);
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

  

  deleteEventByKey($key: string)7 {
    if(confirm('Event wirlich löschen?')){
      this.timelinesService.deleteEventOfTimeline($key, this.route.snapshot.params['id'])
        .subscribe(
          val => {
            alert("Gelöscht!");
          },
          err => alert(`Bei Löschen ist ein Fehler aufgetreten: ${err}`)
        )
    }
  }

}

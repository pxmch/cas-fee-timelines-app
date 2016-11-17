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

  private timeline: Observable<Timeline>;
  private timelineKey: string;
  private eventsForTimeline: Observable<Event[]>;
  private isEventFormVisible = false;
  private isTimelineFormVisible = false;
  private notification = {};

  constructor(private timelinesService: TimelinesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.timelineKey = this.route.snapshot.params['id'];
    this.timeline = this.timelinesService.getTimelineByKey(this.timelineKey);

    this.route.params
      .switchMap((params) => this.timelinesService.getEventsForTimeline(params['id']))
      .subscribe((event) => this.eventsForTimeline = event);
  }

  saveTimeline(form) {
    this.timelinesService.updateTimeline(this.timelineKey, form.getFormValue())
      .subscribe(
        val => {
          this.closeTimelineForm();
          this.showNotification("Timeline gespeichert", "success");
        },
        err => alert(`Bei Speichern ist ein Fehler aufgetreten: ${err}`)
      );
  }

  deleteEventByKey($key: string) {
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

  showNewEventForm() {
    this.isEventFormVisible = true;
  }

  closeEventForm() {
    this.isEventFormVisible = false;
  }

  showTimelineForm() {
    this.isTimelineFormVisible = true;
  }

  closeTimelineForm() {
    this.isTimelineFormVisible = false;
  }

  showNotification(text: string, type = 'info') {
    var icon = '';

    switch(type) {
      case 'success':
            type = 'success';
            icon = 'check_circle'
            break;
      case 'error':
            type = 'error';
            icon = 'error'
            break;
      default:
        type = 'info';
        icon = 'info_outline'
    }

    this.notification = {text, type, icon};
  }

  clearNotification() {
    this.notification = {};
  }

}

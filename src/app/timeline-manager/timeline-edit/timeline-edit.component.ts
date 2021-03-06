import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Timeline} from "../../shared/model/timeline";
import {Event} from '../../shared/model/event'
import {TimelinesService} from "../../shared/model/timelines.service";
import {Observable} from "rxjs/Observable";
import {EventFormComponent} from "../forms/event-form/event-form.component";
declare let componentHandler: any;

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
  private isEventEditMode = false;
  private notification = {};

  eventPrefill: any;

  @ViewChild('evtForm')
  private eventForm: EventFormComponent;

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
        err => this.showNotification(`Bei Speichern ist ein Fehler aufgetreten: ${err}`, "error")
      );
  }

  createEvent(form) {
    this.timelinesService.createEventForTimeline(this.timelineKey, form.getFormValue())
      .subscribe(
        val => {
          this.closeEventForm();
          this.showNotification("Ereignis gespeichert", "success");
        },
        err => this.showNotification(`Bei Speichern ist ein Fehler aufgetreten: ${err}`, "error")
      );
  }

  saveEvent(form) {
    this.timelinesService.updateEvent(form.getFormValue())
      .subscribe(
        val => {
          this.closeEventForm();
          this.showNotification("Ereignis gespeichert", "success");
        },
        err => this.showNotification(`Bei Speichern ist ein Fehler aufgetreten: ${err}`, "error")
      );
  }

  deleteEventByKey(key: string) {
    if(confirm('Wollen Sie dieses Ereignis wirklich löschen?')){
      this.timelinesService.deleteEventOfTimeline(key, this.route.snapshot.params['id'])
        .subscribe(
          val => {
            this.showNotification("Event gelöscht", "success");
          },
          err => this.showNotification(`Bei Löschen ist ein Fehler aufgetreten: ${err}`, "error")
        )
    }
  }

  startEventEdit (key: string) {
    this.timelinesService.getEventByKey(key).subscribe(
      val => {
        this.isEventEditMode = true;
        this.isEventFormVisible = true;
        this.eventPrefill = val;
      },
      err => this.showNotification(`Bei Laden des Ereignisses ist ein Fehler aufgetreten: ${err}`, "error")
    );
  }

  showNewEventForm() {
    this.eventForm.resetForm();
    this.isEventEditMode = false;
    this.isEventFormVisible = true;
  }

  closeEventForm() {
    this.isEventEditMode = false;
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

    if(type === 'success') {
      setTimeout(() => this.clearNotification(), 4500);
    }
  }

  clearNotification() {
    this.notification = {};
  }

}

import { Component, OnInit, Input } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Timeline} from "../../../shared/model/timeline";

@Component({
  selector: 'timeline-style-horizontal-basic',
  templateUrl: './timeline-style-horizontal-basic.component.html',
  styleUrls: ['./timeline-style-horizontal-basic.component.scss']
})
export class TimelineStyleHorizontalBasicComponent implements OnInit {

  @Input() events: Observable<Event[]>
  @Input() timeline: Observable<Timeline>

  private start: string;
  private end: string;
  private duration: number;

  constructor() { }

  ngOnInit() {
    this.events.subscribe(
      events => this.setupTimeline(events)
    );
  }

  setupTimeline(events) {
    this.getTimelineDuration(events);
    this.getLeftPosition('1950-01-01');
  }

  getLeftPosition(date: string){
    return null;
  }


  getTimelineDuration(events) {
    let firstStartDate = events[0].start_date;
    let lastStartDate = events[0].start_date;
    let firstEndDate = events[0].start_date;
    let lastEndDate = events[0].start_date;


    for (var event of events) {
      if(event.start_date < firstStartDate) { firstStartDate = event.start_date}
      if(event.start_date > lastStartDate) { lastStartDate = event.start_date}
      if(event.end_date < firstEndDate) { firstEndDate = event.end_date}
      if(event.end_date > lastEndDate) { lastEndDate = event.end_date}
    }

    let endDates = [ lastStartDate, firstEndDate, lastEndDate ];
    this.end = endDates.sort().reverse()[0];
    this.start = firstStartDate;
    this.duration = new Date(this.end).getTime() - new Date(this.start).getTime();
  }



}

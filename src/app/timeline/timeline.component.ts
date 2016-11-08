import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Event} from "../shared/model/event";
import {Observable} from "rxjs/Rx";
import {TimelinesService} from "../shared/model/timelines.service";
import {Timeline} from "../shared/model/timeline";

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input('showMetadata') showMetadata = true;

  timeline: Observable<Timeline>;
  events : Observable<Event[]>;

  constructor(private timelinesService: TimelinesService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.timeline = this.timelinesService.getTimelineByKey(id);
    this.events = this.timelinesService.getEventsForTimeline(id);
  }
}

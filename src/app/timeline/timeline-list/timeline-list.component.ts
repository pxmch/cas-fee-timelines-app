import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {TimelinesService} from "../../shared/model/timelines.service";
import {Timeline} from "../../shared/model/timeline";

@Component({
  selector: 'timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.scss']
})

export class TimelineListComponent implements OnInit {

  @Input('cssclasses') cssclasses = "";
  @Input('count') count = 8;
  @Input('mode') mode = 'newest';

  timelines: Observable<Timeline[]>;

  constructor(private timelinesService: TimelinesService) { }

  ngOnInit() {
    switch (this.mode) {
      case "newest":
        this.timelines = this.timelinesService.getNewestPublicTimelines(this.count);
        break;
      case "lastchanged":
        this.timelines = this.timelinesService.getLastChangedPublicTimelines(this.count);
        break;
      default:
        this.timelines = null;
    }
  }
}

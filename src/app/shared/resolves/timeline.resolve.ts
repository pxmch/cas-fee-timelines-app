import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {TimelinesService} from "../model/timelines.service";
import {Timeline} from "../model/timeline";

@Injectable()
export class TimelineResolve implements Resolve<Timeline> {

  constructor(private timelineService: TimelinesService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.timelineService
      .getTimelineByKey(route.params['id'])
      .first();
  }
}

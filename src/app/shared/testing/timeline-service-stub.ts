import {Observable} from "rxjs/Observable";
import {Timeline} from "../model/timeline";

export class TimelineServiceStub {
  public getTimelineByKey(id) {
    return new Observable(observer => {
      observer.next(new Timeline('THE_KEY', 'Test-Timeline', 'Beschreibung', new Date(), true, new Date(), 'Horizontal, einfach', 'Tester'));
      observer.complete();
    });
  }
  public getEventsForTimeline(id) { return null; }

  public getNewestPublicTimelines(count) { return null; }
}

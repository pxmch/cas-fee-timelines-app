import {Injectable, Inject} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {AngularFireDatabase, FirebaseRef} from "angularfire2/angularfire2";
import {Timeline} from "./timeline";
import {Event} from "./event";
import {Subject} from "rxjs/Subject";

@Injectable()
export class TimelinesService {

  fbRef: any;

  constructor(private db: AngularFireDatabase, @Inject(FirebaseRef) fb) {
    this.fbRef = fb.database().ref();
  }

  getTimelineByKey(key: string): Observable<Timeline> {
    return this.db.object('/timelines/'+key)
      .map(result => Timeline.fromJson(result));
  }

  getEventsForTimeline(key: string): Observable<Event[]> {
    let eventKeys = this.db.list('eventsPerTimeline/'+key)

    let timelineEvents = eventKeys
      .map(ept => ept.map( event => this.db.object('/events/'+ event.$key)))
      .switchMap(fbObjObs => Observable.combineLatest(fbObjObs));

    return timelineEvents;
  }

  getNewestTimelines(count = 10): Observable<Timeline[]> {
    return this.db.list('/timelines', {
      query: {
        limitToLast: count,
        orderByChild: 'created_date'
      }
    });
  }

  getTimelinesForUser(key: string) : Observable<Timeline[]> {  
    let userKeys = this.db.list('timelinesPerUser/'+key);  

    let timelinesForUser = userKeys 
      .map(tpu => tpu.map (timeline => this.db.object('/timelines/'+timeline.$key))) 
      .switchMap(fbObjObs => Observable.combineLatest(fbObjObs));  

    return timelinesForUser;
   }

  createNewTimeline(userId: string, timeline: any) : Observable<any> {
    const ctime = new Date().toISOString();
    const timelineData = Object.assign({}, timeline, {last_changed: ctime, created_date: ctime });

    const generatedKey = this.fbRef.child('timelines').push().key;

    let dataObject = {};
    dataObject["timelines/" + generatedKey] = timelineData;
    dataObject[`timelinesPerUser/${userId}/${generatedKey}`] = true;


    const subject = new Subject();
    this.fbRef.update(dataObject)
      .then(
        () => {
          subject.next(generatedKey);   // since the firebase promise resolves with 'undefined', add the generated key
          subject.complete();

        },
        err => {
          subject.error(err);
          subject.complete();
        }
      );
    return subject.asObservable();
  }

  updateTimeline(key: string, timeline: any) : Observable<any> {
    const ctime = new Date().toISOString();
    const timelineData = Object.assign({}, timeline, {last_changed: ctime});
    delete(timelineData.$key);

    let dataObject = {};
    dataObject["timelines/" + key] = timelineData;
    return Observable.fromPromise(this.fbRef.update(dataObject));
  }

  deleteTimelineByKey (key: string, userId: string) : Observable<any> {
    let dataObject = {};
    dataObject[`timelines/${key}`] = null;
    dataObject[`timelinesPerUser/${userId}/${key}`] = null;
    dataObject[`eventsPerTimeline/${key}`] = null;
    return Observable.fromPromise(this.fbRef.update(dataObject));
  }

}

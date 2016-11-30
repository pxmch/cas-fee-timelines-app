import {Injectable, Inject} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {AngularFireDatabase, FirebaseRef} from "angularfire2/angularfire2";
import {Timeline} from "./timeline";
import {Event} from "./event";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/do';

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

  getEventByKey(key: string): Observable<Event> {
    return this.db.object('/events/'+key)
      .map(result => Event.fromJson(result));
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

  createTimeline(userId: string, timeline: any) : Observable<any> {
    const ctime = new Date().toISOString();
    const timelineData = Object.assign({}, timeline, {last_changed: ctime, created_date: ctime });

    const generatedKey = this.fbRef.child('timelines').push().key;

    let dataObject = {};
    dataObject["timelines/" + generatedKey] = timelineData;
    dataObject[`timelinesPerUser/${userId}/${generatedKey}`] = true;

    return this.updateFirebaseWithKeyReturned(dataObject, generatedKey);
  }

  updateTimeline(key: string, timeline: any) : Observable<any> {
    const ctime = new Date().toISOString();
    const timelineData = Object.assign({}, timeline, {last_changed: ctime});
    delete(timelineData.$key);

    let dataObject = {};
    dataObject["timelines/" + key] = timelineData;
    return Observable.fromPromise(this.fbRef.update(dataObject));
  }

  updateTimelineLastModifiedTime(key: string) : void {
    const ctime = new Date().toISOString();
    const itemObservable = this.db.object(`/timelines/${key}`);
    itemObservable.update({ last_changed: ctime });
  }

  deleteTimelineByKey (key: string, userId: string) : Observable<any> {
    let dataObject = {};
    dataObject[`timelines/${key}`] = null;
    dataObject[`timelinesPerUser/${userId}/${key}`] = null;
    dataObject[`eventsPerTimeline/${key}`] = null;

    let dbRef = this.fbRef;
    const evtQuery = dbRef.child('eventsPerTimeline').child(key);
    const promise = evtQuery.once('value', function(snapshot) {
      snapshot.forEach(function(eptSnapshot) {
        dataObject['events/'+eptSnapshot.key] = null;
      })
      //console.log(dataObject);
      //console.log(dbRef);
      dbRef.update(dataObject);
    });

    return Observable.fromPromise(promise);
  }

  deleteEventOfTimeline(key: string, timelineKey: string) : Observable<any> {
    let dataObject = {};
    dataObject[`events/${key}`] = null;
    dataObject[`eventsPerTimeline/${timelineKey}/${key}`] = null;

    const obs = Observable.fromPromise(this.fbRef.update(dataObject));

    this.updateTimelineLastModifiedTime(timelineKey);

    return obs;
  }

  createEventForTimeline(timelineKey: string, event: any) : Observable<any> {
    const eventData = Object.assign({}, event);
    const generatedKey = this.fbRef.child('events').push().key;

    let dataObject = {};
    dataObject["events/" + generatedKey] = eventData;
    dataObject[`eventsPerTimeline/${timelineKey}/${generatedKey}`] = true;
    const obs = Observable.fromPromise(this.fbRef.update(dataObject));

    this.updateTimelineLastModifiedTime(timelineKey);

    return obs;
  }

  updateEvent(event: any) : Observable<any> {
    const ctime = new Date().toISOString();
    const evtKey = event.$key;
    const eventData = Object.assign({}, event, {last_changed: ctime});
    delete(eventData.$key);

    let dataObject = {};
    dataObject["events/" + evtKey] = eventData;
    return Observable.fromPromise(this.fbRef.update(dataObject));
  }

  updateFirebaseWithKeyReturned(dataObject, key) : Observable<any> {
    const subject = new Subject();
    this.fbRef.update(dataObject)
      .then(
        () => {
          subject.next(key);   // since the firebase promise resolves with 'undefined', add the generated key
          subject.complete();

        },
        err => {
          subject.error(err);
          subject.complete();
        }
      );
    return subject.asObservable();
  }

}

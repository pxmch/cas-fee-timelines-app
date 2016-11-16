import {Component} from "@angular/core"; 
import {Observable} from "rxjs/Rx"; 
import {OnInit} from '@angular/core'; 
import {TimelinesService} from "../shared/model/timelines.service"; 
import {Timeline} from '../shared/model/timeline'

  @Component({ 
  selector: 'backend', 
  templateUrl: './timeline-manager.component.html', 
  styleUrls: ['./timeline-manager.component.scss'
]})  

export class TimelineManagerComponent implements OnInit {  

    timelinesForUser: Observable<Timeline[]>;  

    constructor(private timelinesService: TimelinesService) {}  

    ngOnInit() { 
      this.timelinesForUser = this.timelinesService.getTimelinesForUser('-KPio2Etua4oo1i73dfx'); 
    } 

    deleteTimeline(key: string) {
      if (window.confirm("Wirklich löschen?")) {
        this.timelinesService.deleteTimelineByKey(key, '-KPio2Etua4oo1i73dfx');
      }
    }
}



/* old code
import {Component} from '@angular/core';
import {Pipe} from '@angular/core';
import {PipeTransform} from '@angular/core'
import {AngularFire, FirebaseListObservable, AngularFireDatabase} from 'angularfire2';

@Pipe({name: 'values', pure: true})
export class ValuesPipe implements PipeTransform {
  transform(value:any, args:any[] = null):any {
    if (value) {
      return Object.keys(value).map((key) =>
      {
        let newObj = value[key];
        newObj['key'] = key;
        return newObj;
    });
    }
  }
}

@Component({
  selector: 'login',
  templateUrl: './timeline-manager.component.html',
  styleUrls: ['./timeline-manager.component.scss'],
  providers: [AngularFire]
})


export class TimelineManagerComponent {
  private timelines:FirebaseListObservable<any[]>;

  private timeline_title = "";
  private timeline_description = "";

  constructor(private af:AngularFire) {

    try {
      this.timelines = af.database.list('/timelines');

    }catch(e){
      console.log('timelines could not be fetched'+e.toString());
    }

  }

  private addTimeline() {

    var timestamp = new Date().toISOString();

    this.timelines.push({
      created_date: timestamp, title: this.timeline_title, description: this.timeline_description,
      is_public: false
    });

    this.timeline_title = '';
    this.timeline_description ='';

  }

  private addEvent(timeline:any) {


    console.log("timeline in addEvent: "+ timeline.$key);

    let localTimeline:any = this.af.database.list('/timelines/' + timeline.$key + '/datapoints');

    localTimeline.push({
      "time": timeline.event_date,
      "event": timeline.event_description
    });
  }


  private editEvent(timeline:any, datapoint:any) {

    var db = firebase.database();
    var ref = db.ref('/timelines/' + timeline.$key + '/datapoints');


    var datapointRef = ref.child(datapoint.key);

    datapointRef.set({
      time: datapoint.time,
      event: datapoint.event
    });

  }

  private deleteEvent(timeline:any, datapoint:any) {

    var db = firebase.database();
    var ref = db.ref('/timelines/' + timeline.$key + '/datapoints');


    var datapointRef = ref.child(datapoint.key);

    datapointRef.remove();

  }

  private deleteTimeline(timeline:any) {

    var db = firebase.database();
    var ref = db.ref('/timelines/');


    var datapointRef = ref.child(timeline.$key);

    datapointRef.remove();

  }


}*/

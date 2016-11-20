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
      if (window.confirm("Wollen Sie diese Timeline mit allen Ereignissen wirklich löschen?\n\nDiese Aktion kann nicht rückgängig gemacht werden.")) {
        this.timelinesService.deleteTimelineByKey(key, '-KPio2Etua4oo1i73dfx');
      }
    }
}

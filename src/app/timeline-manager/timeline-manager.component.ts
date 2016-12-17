import {Component} from "@angular/core"; 
import {Observable} from "rxjs/Rx"; 
import {OnInit} from '@angular/core'; 
import {TimelinesService} from "../shared/model/timelines.service"; 
import {Timeline} from '../shared/model/timeline'
import {LoginService} from "../auth/services/login.service";

  @Component({ 
  selector: 'backend', 
  templateUrl: './timeline-manager.component.html', 
  styleUrls: ['./timeline-manager.component.scss'
]})  

export class TimelineManagerComponent implements OnInit {  

    private timelinesForUser: Observable<Timeline[]>;  
    private showProgressbar =  true;
    private showBlankSlate  =  false;
    private notification = {};


    constructor(private timelinesService: TimelinesService, private loginService: LoginService) {}  

    ngOnInit() {
      let fakeProgressTimer = setTimeout(() => { this.showProgressbar = false, this.showBlankSlate = true }, 5000);
      
      this.timelinesForUser = this.timelinesService.getTimelinesForUser(this.loginService.getUserId());
      this.timelinesForUser.subscribe(
        () => {
          clearTimeout(fakeProgressTimer);
          this.showBlankSlate = true;
          this.showProgressbar = false;
        },
        err => {
          clearTimeout(fakeProgressTimer);
          this.showBlankSlate = false;
          this.showProgressbar = false;
          this.showNotification(`Beim Lesen der Timelines ist ein Fehler aufgetreten: ${err}`, "error");
        }
      );
    } 

    deleteTimeline(key: string) {
      if (window.confirm("Wollen Sie diese Timeline mit allen Ereignissen wirklich löschen?\n\nDiese Aktion kann nicht rückgängig gemacht werden.")) {
        this.timelinesService.deleteTimelineByKey(key, this.loginService.getUserId())
          .subscribe(
            () =>  this.showNotification("Timeline gelöscht", "success"),
            err => this.showNotification(`Beim Löschen ist ein Fehler aufgetreten: ${err}`, "error")
          );
      }
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

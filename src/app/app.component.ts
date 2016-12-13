import {Component, ViewEncapsulation} from '@angular/core';
import { OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

declare let componentHandler: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy, AfterViewChecked  {

  private title = 'Timeline-App';
  private sub: any;
  private isEmbedView: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    /* check for embed view */
    this.sub = this.router.events.subscribe(e => {
      if (e instanceof RoutesRecognized) {
        this.isEmbedView = e.url.indexOf('/embed/') < 0 ? false : true;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewChecked() {
    /* update of material design lite elements, when dynamically created
       @see https://denisvuyka.github.io/2016/06/06/angular2-material.html
     */
    if (componentHandler) {
      componentHandler.upgradeAllRegistered();
    }
  }

}

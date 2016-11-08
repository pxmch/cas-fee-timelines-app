import {Component, ViewEncapsulation} from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy  {

  private title = 'Timeline-App';
  private sub: any;
  private isEmbedView: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    /* check for embed view */
    this.sub = this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.isEmbedView = e.url.indexOf('/embed/') < 0 ? false : true;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

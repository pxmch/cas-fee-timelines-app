import { Component, OnInit, Input } from '@angular/core';
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'timeline-style-vertical-basic',
  templateUrl: './timeline-style-vertical-basic.component.html',
  styleUrls: ['./timeline-style-vertical-basic.component.scss']
})

export class TimelineStyleVerticalBasicComponent implements OnInit {

  @Input() events: Observable<Event[]>

  constructor() { }

  ngOnInit() {
  }

}

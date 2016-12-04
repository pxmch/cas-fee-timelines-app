import {Component, Input, OnInit} from '@angular/core';
declare var componentHandler: any;

@Component({
  selector: 'timeline-teaser',
  templateUrl: './timeline-teaser.component.html',
  styleUrls: ['./timeline-teaser.component.scss']
})
export class TimelineTeaserComponent implements OnInit {
  @Input('title') title: string;
  @Input('description') description: string;
  @Input('id') id: string;

  private colorClass: string;

  constructor () { }

  ngOnInit (){
    this.colorClass = "color-"+(this.id.charCodeAt(11) % 10);
  }

}

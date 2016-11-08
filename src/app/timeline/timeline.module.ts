import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineRouting} from "./timeline.routing";
import {TimelineComponent} from "./timeline.component";
import {TimelineListComponent} from "./timeline-list/timeline-list.component";
import {TimelineTeaserComponent} from "./timeline-teaser/timeline-teaser.component";
import {TimelineDetailComponent} from "./timeline-detail/timeline-detail.component";
import {TimelineOverviewComponent} from "./timeline-overview/timeline-overview.component";
import {TruncPipe} from '../shared/pipes/trunc.pipe';


@NgModule({
  imports: [
    CommonModule,
    TimelineRouting,
  ],
  declarations: [
    TimelineComponent,
    TimelineDetailComponent,
    TimelineListComponent,
    TimelineOverviewComponent,
    TimelineTeaserComponent,
    TruncPipe
  ],
  exports: [
    TimelineComponent,
    TimelineDetailComponent,
    TimelineListComponent,
    TimelineOverviewComponent,
    TimelineTeaserComponent
  ]
})
export class TimelineModule { }

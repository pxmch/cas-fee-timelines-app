import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineRouting} from "./timeline.routing";
import {TimelineComponent} from "./timeline.component";
import {TimelineListComponent} from "./timeline-list/timeline-list.component";
import {TimelineTeaserComponent} from "./timeline-teaser/timeline-teaser.component";
import {TimelineDetailComponent} from "./timeline-detail/timeline-detail.component";
import {TimelineOverviewComponent} from "./timeline-overview/timeline-overview.component";
import {TimelineStyleVerticalBasicComponent} from './styles/timeline-style-vertical-basic/timeline-style-vertical-basic.component';
import {TimelineStyleHorizontalBasicComponent} from './styles/timeline-style-horizontal-basic/timeline-style-horizontal-basic.component';
import {LinkyModule} from 'angular2-linky';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    LinkyModule,
    SharedModule,
    TimelineRouting
  ],
  declarations: [
    TimelineComponent,
    TimelineDetailComponent,
    TimelineListComponent,
    TimelineOverviewComponent,
    TimelineTeaserComponent,
    TimelineStyleVerticalBasicComponent,
    TimelineStyleHorizontalBasicComponent
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

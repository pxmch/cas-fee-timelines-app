import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimelineComponent} from "./timeline.component";
import {TimelineDetailComponent} from "./timeline-detail/timeline-detail.component";
import {TimelineOverviewComponent} from "./timeline-overview/timeline-overview.component";

const TimelineRoutes: Routes = [
  {
    path: 'timeline/embed/:id', component: TimelineComponent
  },
  {
    path: 'timeline/:id', component: TimelineDetailComponent
  },
  {
    path: 'timeline', component: TimelineOverviewComponent
  }
];

export const TimelineRouting: ModuleWithProviders = RouterModule.forChild(TimelineRoutes);

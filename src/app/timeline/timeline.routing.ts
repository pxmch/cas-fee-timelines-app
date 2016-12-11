import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimelineComponent} from "./timeline.component";
import {TimelineDetailComponent} from "./timeline-detail/timeline-detail.component";
import {TimelineOverviewComponent} from "./timeline-overview/timeline-overview.component";
import {TimelineResolve} from "../shared/resolves/timeline.resolve";

const TimelineRoutes: Routes = [
  {
    path: 'timeline/embed/:id', component: TimelineComponent,
    resolve: {
      timeline: TimelineResolve
    }
  },
  {
    path: 'timeline/:id', component: TimelineDetailComponent,
    resolve: {
     timeline: TimelineResolve
    }
  },
  {
    path: 'timeline', component: TimelineOverviewComponent
  }
];

export const TimelineRouting: ModuleWithProviders = RouterModule.forChild(TimelineRoutes);

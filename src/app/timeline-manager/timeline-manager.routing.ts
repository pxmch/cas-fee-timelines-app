import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginGuardService} from "../auth/services/login-guard.service";
import {TimelineManagerComponent} from "./timeline-manager.component";
import {TimelineEditComponent} from "./timeline-edit/timeline-edit.component";
import {TimelineCreateComponent} from "./timeline-create/timeline-create.component";
import {TimelineResolve} from "../shared/resolves/timeline.resolve.ts";


const TimelineManagerRoutes: Routes = [
  {
    path: 'timeline-manager/new',
    component: TimelineCreateComponent
  },
  {
    path: 'timeline-manager/edit/:id',
    component: TimelineEditComponent
    /*
    resolve: {
      timeline: TimelineResolve
    }
    */
  },
  {
    path: 'timeline-manager/edit',
    redirectTo: '/timeline-manager/new'
  },
  {
    path: 'timeline-manager',
    component: TimelineManagerComponent,
    canActivate: [ LoginGuardService ]
  }
];

export const TimelineManagerRouting: ModuleWithProviders = RouterModule.forChild(TimelineManagerRoutes);

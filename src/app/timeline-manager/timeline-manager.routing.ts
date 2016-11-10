import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimelineManagerComponent} from "./timeline-manager.component";
import {LoginGuardService} from "../auth/services/login-guard.service";
import {TimelineEditComponent} from "./timeline-edit/timeline-edit.component";
import {TimelineCreateComponent} from "./timeline-create/timeline-create.component";


const TimelineManagerRoutes: Routes = [
  { path: 'timeline-manager/new', component: TimelineCreateComponent },
  { path: 'timeline-manager/edit/:id', component: TimelineEditComponent },
  { path: 'timeline-manager', component: TimelineManagerComponent, canActivate: [ LoginGuardService ] }
];

export const TimelineManagerRouting: ModuleWithProviders = RouterModule.forChild(TimelineManagerRoutes);

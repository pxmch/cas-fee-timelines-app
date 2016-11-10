import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimelineManagerComponent} from "./timeline-manager.component";
import {LoginGuardService} from "../auth/services/login-guard.service";


const TimelineManagerRoutes: Routes = [
  { path: 'timeline-manager', component: TimelineManagerComponent, canActivate: [ LoginGuardService ] }
];

export const TimelineManagerRouting: ModuleWithProviders = RouterModule.forChild(TimelineManagerRoutes);

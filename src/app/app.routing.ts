import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {TimelineManagerComponent} from './timeline-manager/timeline-manager.component';
import {LoginGuardService} from "./auth/services/login-guard.service";

declare let System: any; //will be transformed by webpack +2.0 to webpack_require

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'login', loadChildren: () => {
      return System.import('./auth/auth.routing').then(result => result.AuthModule);
    }
  },
  { path: 'timeline-manager', component: TimelineManagerComponent, canActivate: [ LoginGuardService ] },
  { path: '', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);

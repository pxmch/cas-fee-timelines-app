import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';
import {AuthMethods, AngularFireModule} from "angularfire2";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/combineLatest';

import {AboutComponent} from './about/about.component';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {HomeComponent} from './home/home.component';
import {TimelineManagerModule} from "./timeline-manager/timeline-manager.module";
import {TimelineModule} from "./timeline/timeline.module";
import {TimelineResolve} from "./shared/resolves/timeline.resolve";
import {TimelinesService} from "./shared/model/timelines.service";

var firebaseConfig = {
  apiKey: "AIzaSyBc8rEoDEjnrHTWLbf-ATYOCAavYUyTLPU",
  authDomain: "timelines-9771d.firebaseapp.com",
  databaseURL: "https://timelines-9771d.firebaseio.com",
  storageBucket: "timelines-9771d.appspot.com"
};

var firebaseAuthConfig = {
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    HomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    TimelineModule,
    TimelineManagerModule
  ],
  providers: [
    appRoutingProviders,
    TimelineResolve,
    TimelinesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

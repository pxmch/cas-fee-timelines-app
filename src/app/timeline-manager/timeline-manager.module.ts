import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineManagerRouting} from "./timeline-manager.routing";
import {TimelineManagerComponent} from "./timeline-manager.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TimelineManagerRouting,
  ],
  declarations: [
    TimelineManagerComponent
  ],
  exports: [
    TimelineManagerComponent
  ]
})
export class TimelineManagerModule { }

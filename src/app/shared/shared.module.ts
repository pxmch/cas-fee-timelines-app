import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TruncPipe} from "./pipes/trunc.pipe";
import {TimelineResolve} from "./resolves/timeline.resolve";

@NgModule({
  declarations: [
    TruncPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TruncPipe
  ],
  providers: [
    TimelineResolve
  ]
})
export class SharedModule { }

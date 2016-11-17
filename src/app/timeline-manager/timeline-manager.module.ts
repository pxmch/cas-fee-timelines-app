import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {EventFormComponent} from "./forms/event-form/event-form.component";
import {SharedModule} from "../shared/shared.module";
import {TimelineManagerComponent} from "./timeline-manager.component";
import {TimelineManagerRouting} from "./timeline-manager.routing";
import {TimelineFormComponent} from "./forms/timeline-form/timeline-form.component";
import {TimelineEditComponent} from "./timeline-edit/timeline-edit.component";
import {TimelineCreateComponent} from "./timeline-create/timeline-create.component";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    TimelineManagerRouting,
  ],
  declarations: [
    EventFormComponent,
    TimelineFormComponent,
    TimelineManagerComponent,
    TimelineEditComponent,
    TimelineCreateComponent
  ],
  exports: [
    TimelineManagerComponent
  ]
})
export class TimelineManagerModule { }

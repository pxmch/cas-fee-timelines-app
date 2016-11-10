import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineManagerRouting} from "./timeline-manager.routing";
import {TimelineManagerComponent} from "./timeline-manager.component";
import {SharedModule} from "../shared/shared.module";
import {TimelineFormComponent} from "./forms/timeline-form/timeline-form.component";
import {ReactiveFormsModule} from "@angular/forms";
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

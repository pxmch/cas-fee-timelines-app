import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TruncPipe} from "./pipes/trunc.pipe";

@NgModule({
  declarations: [
    TruncPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TruncPipe
  ]
})
export class SharedModule { }

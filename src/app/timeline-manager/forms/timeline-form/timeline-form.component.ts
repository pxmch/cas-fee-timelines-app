import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'timeline-form',
  templateUrl: './timeline-form.component.html',
  styleUrls: ['./timeline-form.component.scss']
})

export class TimelineFormComponent implements OnInit {

  timelineForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.timelineForm = this.fb.group({
      title: ['',Validators.required],
      description: ['',Validators.required],
      isPrivate: ['']
    });
  }

  ngOnInit() {
  }

  getIsValid() {
    return this.timelineForm.valid;
  }

  getFormValue() {
    return this.timelineForm.value;
  }

}

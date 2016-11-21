import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  eventForm: FormGroup;

  @Input()
  prefilledData: any;

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      title: ['',Validators.required],
      description: [''],
      start_date: ['', Validators.required],
      end_date: [''],
      date_display_format: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  getIsValid() {
    return this.eventForm.valid;
  }

  getFormValue() {
    return this.eventForm.value;
  }

}

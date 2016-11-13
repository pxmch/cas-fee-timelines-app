import {Component, OnInit, OnChanges, Input, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'timeline-form',
  templateUrl: './timeline-form.component.html',
  styleUrls: ['./timeline-form.component.scss']
})

export class TimelineFormComponent implements OnInit, OnChanges {

  timelineForm: FormGroup;

  @Input()
  prefilledData: any;

  constructor(private fb: FormBuilder) {
    this.timelineForm = this.fb.group({
      title: ['',Validators.required],
      description: ['',Validators.required],
      is_public: [''],
      created_date: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['prefilledData']) {
      this.timelineForm.patchValue(changes['prefilledData'].currentValue)
    }
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

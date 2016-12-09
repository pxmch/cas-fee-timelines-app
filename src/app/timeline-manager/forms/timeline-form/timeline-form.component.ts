import {Component, OnInit, OnChanges, Input, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'timeline-form',
  templateUrl: './timeline-form.component.html'
})

export class TimelineFormComponent implements OnInit, OnChanges {

  timelineForm: FormGroup;

  @Input()
  prefilledData: any;

  constructor(private fb: FormBuilder) {
    this.initializeFormControls();
  }

  initializeFormControls() : void {
    this.timelineForm = this.fb.group({
      title: ['',Validators.required],
      description: ['',Validators.required],
      is_public: [''],
      created_date: [''],
      style_theme: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['prefilledData'] && changes['prefilledData'].currentValue) {
      this.timelineForm.patchValue(changes['prefilledData'].currentValue)
    }
  }

  ngOnInit() {
  }

  resetForm(): void {
    this.initializeFormControls();
  }

  getIsValid() {
    return this.timelineForm.valid;
  }

  getFormValue() {
    return this.timelineForm.value;
  }

}

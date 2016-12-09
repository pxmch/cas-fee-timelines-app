import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
declare let componentHandler: any;

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html'
})
export class EventFormComponent implements OnInit, OnChanges {

  eventForm: FormGroup;

  @Input()
  prefilledData: any;

  constructor(private fb: FormBuilder) {
    this.initializeFormControls();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['prefilledData'] && changes['prefilledData'].currentValue) {
      this.eventForm.patchValue(changes['prefilledData'].currentValue)
    }
  }

  initializeFormControls() : void {
    this.eventForm = this.fb.group({
      title: ['',Validators.required],
      description: [''],
      start_date: ['', Validators.required],
      end_date: [''],
      date_display_format: ['', Validators.required],
      $key: ['']
    });
  }

  resetForm(): void {
    this.initializeFormControls();
  }

  getIsValid() {
    return this.eventForm.valid;
  }

  getFormValue() {
    return this.eventForm.value;
  }

  ngAfterViewChecked() {
    /* update of material design lite elements, when dynamically created
     @see https://denisvuyka.github.io/2016/06/06/angular2-material.html
     */
    if (componentHandler) {
      componentHandler.upgradeAllRegistered();
    }
  }

}

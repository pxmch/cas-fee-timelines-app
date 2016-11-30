/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TimelineStyleVerticalBasicComponent } from './timeline-style-vertical-basic.component';

describe('TimelineStyleVerticalBasicComponent', () => {
  let component: TimelineStyleVerticalBasicComponent;
  let fixture: ComponentFixture<TimelineStyleVerticalBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineStyleVerticalBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineStyleVerticalBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

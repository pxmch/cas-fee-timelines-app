/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TimelineStyleHorizontalBasicComponent } from './timeline-style-horizontal-basic.component';

describe('TimelineStyleHorizontalBasicComponent', () => {
  let component: TimelineStyleHorizontalBasicComponent;
  let fixture: ComponentFixture<TimelineStyleHorizontalBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineStyleHorizontalBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineStyleHorizontalBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

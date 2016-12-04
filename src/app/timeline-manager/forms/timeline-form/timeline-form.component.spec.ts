/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TimelineFormComponent } from './timeline-form.component';

describe('TimelineFormComponent', () => {
  let component: TimelineFormComponent;
  let fixture: ComponentFixture<TimelineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineFormComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

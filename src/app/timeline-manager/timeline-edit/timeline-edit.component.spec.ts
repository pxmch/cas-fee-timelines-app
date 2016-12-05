/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TimelineEditComponent } from './timeline-edit.component';

describe('TimelineEditComponent', () => {
  let component: TimelineEditComponent;
  let fixture: ComponentFixture<TimelineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineEditComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /***
  it('should create', () => {
    expect(component).toBeTruthy();
  });
***/
});

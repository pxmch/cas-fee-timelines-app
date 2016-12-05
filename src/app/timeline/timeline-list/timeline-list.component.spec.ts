/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TimelineListComponent } from './timeline-list.component';

describe('TimelineListComponent', () => {
  let component: TimelineListComponent;
  let fixture: ComponentFixture<TimelineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineListComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /***
  it('should create', () => {
    expect(component).toBeTruthy();
  });
***/
});

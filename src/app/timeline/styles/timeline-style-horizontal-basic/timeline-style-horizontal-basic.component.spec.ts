/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { TimelineStyleHorizontalBasicComponent } from './timeline-style-horizontal-basic.component';
import {TruncPipeMock} from "../../../shared/testing/trunc-pipe-mock";
import {LinkyPipeMock} from "../../../shared/testing/linky-pipe-mock";


describe('TimelineStyleHorizontalBasicComponent', () => {
  let component: TimelineStyleHorizontalBasicComponent;
  let fixture: ComponentFixture<TimelineStyleHorizontalBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineStyleHorizontalBasicComponent, TruncPipeMock, LinkyPipeMock ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineStyleHorizontalBasicComponent);
    component = fixture.componentInstance;

    component.events = Observable.from([]);
    component.timeline = Observable.from([]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

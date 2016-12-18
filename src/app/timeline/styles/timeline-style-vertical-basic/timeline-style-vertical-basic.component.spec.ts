/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Pipe, DebugElement } from '@angular/core';

import {TimelineStyleVerticalBasicComponent} from './timeline-style-vertical-basic.component';
import {Observable} from "rxjs/Observable";
import {TruncPipeMock} from "../../../shared/testing/trunc-pipe-mock";
import {LinkyPipeMock} from "../../../shared/testing/linky-pipe-mock";

describe('TimelineStyleVerticalBasicComponent', () => {
  let component: TimelineStyleVerticalBasicComponent;
  let fixture: ComponentFixture<TimelineStyleVerticalBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineStyleVerticalBasicComponent, TruncPipeMock, LinkyPipeMock ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineStyleVerticalBasicComponent);
    component = fixture.componentInstance;

    component.events = Observable.from([]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


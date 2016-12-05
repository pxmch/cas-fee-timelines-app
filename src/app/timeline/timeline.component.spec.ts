/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {TimelinesService} from "../shared/model/timelines.service";
import {Pipe} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {By} from '@angular/platform-browser';

import {TimelineComponent} from './timeline.component';
import {Timeline} from "../shared/model/timeline";

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineComponent, DatePipeMock ],
      providers: [
        {provide: TimelinesService, useClass: TimelineServiceStub },
        {provide: ActivatedRoute, useClass: RouterStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('metadata should contain the correct title', () => {
    expect(fixture.debugElement.query(By.css('.timeline__metadata')).nativeElement.textContent).toContain('Test-Timeline');
  });
});

class TimelineServiceStub {
  public getTimelineByKey(id) {
    return new Observable(observer => {
      observer.next(new Timeline('ABDC', 'Test-Timeline', '', new Date(), true, new Date()));
      observer.complete();
    });
  }
  public getEventsForTimeline(id) { return null; }
}

class RouterStub {
  public snapshot = { params: { id : 'ABCD'}}
}

/**
 * This mock is needed because the angular 2 built in date pipe
 * throws 'ReferenceError: Can't find variable: Intl' when running
 * tests with karma
 */
@Pipe({
  name: 'date',
  pure: false // required to update the value when the promise is resolved
})
export class DatePipeMock implements Pipe {
  name: string = 'date';

  transform(query: string, ...args: any[]): any {
    return query;
  }
}

/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {TimelinesService} from "../shared/model/timelines.service";
import {Directive, Input} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {By} from '@angular/platform-browser';

import {Timeline} from "../shared/model/timeline";
import {TimelineComponent} from './timeline.component';
import {LinkyPipeMock} from "../shared/testing/linky-pipe-mock";
import {TruncPipeMock} from "../shared/testing/trunc-pipe-mock";
import {DatePipeMock} from "../shared/testing/date-pipe-mock";


describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineComponent, DatePipeMock, TruncPipeMock, LinkyPipeMock, MockVerticalTimelineDirective, MockHorizontalTimelineDirective ],
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

  it('public timelines should not display an error message', () => {
    expect(fixture.debugElement.query(By.css('timeline__message-private'))).toBe(null);
  });
});

class TimelineServiceStub {
  public getTimelineByKey(id) {
    return new Observable(observer => {
      observer.next(new Timeline('THE_KEY', 'Test-Timeline', 'Beschreibung', new Date(), true, new Date(), 'Horizontal, einfach', 'Tester'));
      observer.complete();
    });
  }
  public getEventsForTimeline(id) { return null; }
}

class RouterStub {
  public snapshot = { params: { id : 'THE_KEY'}}
}

@Directive({
  selector: 'timeline-style-horizontal-basic'
})
class MockHorizontalTimelineDirective {
  @Input('events')
  public events: Observable<Event[]>;
  @Input('timeline')
  public timeline: Observable<Timeline[]>;
}


@Directive({
  selector: 'timeline-style-vertical-basic'
})
class MockVerticalTimelineDirective {
  @Input('events')
  public events: Observable<Event[]>;
}

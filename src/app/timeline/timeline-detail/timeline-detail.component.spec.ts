/* tslint:disable:no-unused-variable */
import { Pipe, Input, Directive } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { TimelineDetailComponent } from './timeline-detail.component';
import { Timeline } from "../../shared/model/timeline";
import { TimelinesService } from "../../shared/model/timelines.service";
import { RouterLinkStubDirective } from "../../shared/testing/router-stubs";
import { LinkyPipeMock } from "../../shared/testing/linky-pipe-mock";
import { TruncPipeMock } from "../../shared/testing/trunc-pipe-mock";
import { TimelineServiceStub } from "../../shared/testing/timeline-service-stub";
import { By } from '@angular/platform-browser';

describe('TimelineDetailComponent', () => {
  let component: TimelineDetailComponent;
  let fixture: ComponentFixture<TimelineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineDetailComponent, RouterLinkStubDirective, MockTimeline, TruncPipeMock, LinkyPipeMock ],
      providers: [
        {provide: TimelinesService, useClass: TimelineServiceStub },
        {provide: ActivatedRoute, useClass: RouterStub },
        {provide: RouterLink, useClass: RouterStub },
        {provide: Router, useClass: RouterStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineDetailComponent);
    component = fixture.componentInstance;

    component.events = Observable.from([]);
    component.timeline = Observable.from([]);


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })

  it('metadata should contain the correct title', () => {
    expect(fixture.debugElement.query(By.css('h1')).nativeElement.textContent).toContain('Test-Timeline');
  });

  it('public timelines should not display an error message', () => {
    expect(fixture.debugElement.query(By.css('.timeline-detail__message-private'))).toBe(null);
  });

});

class RouterStub {
  public snapshot = { params: { id : 'THE_KEY'}}
}

@Directive({
  selector: 'timeline'
})
class MockTimeline {
  @Input('showMetadata')
  public showMetadata = false;
}

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimelineListComponent } from './timeline-list.component';
import { TimelineTeaserComponent } from '../timeline-teaser/timeline-teaser.component';
import { RouterLinkStubDirective } from "../../shared/testing/router-stubs";
import { TruncPipeMock } from "../../shared/testing/trunc-pipe-mock";
import { TimelineServiceStub } from "../../shared/testing/timeline-service-stub";
import { TimelinesService } from "../../shared/model/timelines.service";

describe('TimelineListComponent', () => {
  let component: TimelineListComponent;
  let fixture: ComponentFixture<TimelineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: TimelinesService, useClass: TimelineServiceStub }
      ],
      declarations: [
        TimelineListComponent,
        TimelineTeaserComponent,
        RouterLinkStubDirective,
        TruncPipeMock
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

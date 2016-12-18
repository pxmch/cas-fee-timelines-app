/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { TimelineListComponent } from '../timeline/timeline-list/timeline-list.component';
import { TimelineTeaserComponent } from "../timeline/timeline-teaser/timeline-teaser.component";
import { RouterLinkStubDirective } from "../shared/testing/router-stubs";
import { TruncPipeMock } from "../shared/testing/trunc-pipe-mock";
import { TimelinesService } from "../shared/model/timelines.service";
import { TimelineServiceStub } from "../shared/testing/timeline-service-stub";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: TimelinesService, useClass: TimelineServiceStub }
      ],
      declarations: [
        HomeComponent,
        RouterLinkStubDirective,
        TimelineListComponent,
        TimelineTeaserComponent,
        TruncPipeMock
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

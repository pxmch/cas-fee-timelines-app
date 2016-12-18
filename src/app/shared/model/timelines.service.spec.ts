/* tslint:disable:no-unused-variable */
import { Injectable } from "@angular/core"
import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFireDatabase, FirebaseRef } from "angularfire2/index";
import { Observable} from "rxjs/Observable";
import { Timeline } from "./timeline";
import { TimelinesService } from './timelines.service.ts';
import {FirebaseApp} from "angularfire2/tokens";


describe('Service: Timelines', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        TimelinesService,
        { provide: AngularFireDatabase, useClass: StubAngularFireDatabase }
      ]
    })
      .compileComponents();
  }));


  /* TODO: IMPLEMENT FAILING TESTS

  it('should ...', inject([TimelinesService], (service) => {
    expect(service()).toBeTruthy();
  }));

  it('saves an item to Firebase', inject([AngularFireDatabase], (af) => {
    let ref = new Firebase('');
    let service = new TimelinesService(af, ref);
    // create a spy to use if push is called
    spyOn(service.ref, 'object');
    service.add({ item: true });
    // expect that push was called
    expect(service.ref.push).toHaveBeenCalled();
  }));
  */
});

@Injectable()
class StubAngularFireDatabase  {
  public object(path: string): Observable<any> {
    return new Observable(observer => {
      observer.next(new Timeline('THE_KEY', 'Test-Timeline', 'Beschreibung', new Date(), true, new Date(), 'Horizontal, einfach', 'Tester'));
      observer.next(new Timeline('THE_KEY2', 'Test-Timeline2', 'Beschreibung2', new Date(), true, new Date(), 'Horizontal, einfach', 'Tester'));
      observer.complete();
    });
  }
  public getEventsForTimeline(id) { return null; }
}

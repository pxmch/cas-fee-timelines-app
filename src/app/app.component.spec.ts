/* tslint:disable:no-unused-variable */

import {TestBed, ComponentFixture, async, inject} from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import {RouterModule, NavigationEnd } from '@angular/router';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {Observable} from "rxjs/Observable";
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


class DummyComponent { }

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let location, router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        AuthModule,
        RouterModule
      ],
      providers: [
        RouterTestingModule.withRoutes([
          { path: '', component: AppComponent }
        ])
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  beforeEach(inject([Router, Location], (_router: Router, _location: Location) => {
    location = _location;
    router = _router;
  }));


  /***
  it('should create the app', async(() => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));
   
  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
   ***/
});


class RouterMock {
  public ne = new NavigationEnd(0, '', '');
  public events = new Observable(observer => {
    observer.next(this.ne);
    observer.complete();
  });
}

class RouterEmbedMock {
  public ne = new NavigationEnd(0, '/timeline/embed', '/limeline/embed');
  public events = new Observable(observer => {
    observer.next(this.ne);
    observer.complete();
  });
}

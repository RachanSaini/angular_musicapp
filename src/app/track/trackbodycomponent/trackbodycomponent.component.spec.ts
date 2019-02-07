import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackbodycomponentComponent } from './trackbodycomponent.component';

describe('TrackbodycomponentComponent', () => {
  let component: TrackbodycomponentComponent;
  let fixture: ComponentFixture<TrackbodycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackbodycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackbodycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

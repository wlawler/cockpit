import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CockpitSpecComponent } from './cockpit--spec.component';

describe('CockpitSpecComponent', () => {
  let component: CockpitSpecComponent;
  let fixture: ComponentFixture<CockpitSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CockpitSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CockpitSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

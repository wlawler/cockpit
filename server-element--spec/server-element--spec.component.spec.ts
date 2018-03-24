import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerElementSpecComponent } from './server-element--spec.component';

describe('ServerElementSpecComponent', () => {
  let component: ServerElementSpecComponent;
  let fixture: ComponentFixture<ServerElementSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerElementSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerElementSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

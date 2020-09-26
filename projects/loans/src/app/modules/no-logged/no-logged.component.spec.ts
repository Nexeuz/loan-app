import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoggedComponent } from './no-logged.component';

describe('NoLoggedComponent', () => {
  let component: NoLoggedComponent;
  let fixture: ComponentFixture<NoLoggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLoggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

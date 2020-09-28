import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAvailableComponent } from './loan-available.component';

describe('LoanAvailableComponent', () => {
  let component: LoanAvailableComponent;
  let fixture: ComponentFixture<LoanAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

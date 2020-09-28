import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanContainerComponent } from './loan-container.component';

describe('LoanContainerComponent', () => {
  let component: LoanContainerComponent;
  let fixture: ComponentFixture<LoanContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

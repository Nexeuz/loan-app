import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLoanListComponent } from './request-loan-list.component';

describe('RequestLoanListComponent', () => {
  let component: RequestLoanListComponent;
  let fixture: ComponentFixture<RequestLoanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLoanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLoanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

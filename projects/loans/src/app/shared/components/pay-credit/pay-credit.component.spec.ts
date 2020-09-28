import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCreditComponent } from './pay-credit.component';

describe('PayCreditComponent', () => {
  let component: PayCreditComponent;
  let fixture: ComponentFixture<PayCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

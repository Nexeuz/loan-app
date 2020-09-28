import { TestBed } from '@angular/core/testing';

import { PayService } from './pay.service';

describe('PayServiceService', () => {
  let service: PayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

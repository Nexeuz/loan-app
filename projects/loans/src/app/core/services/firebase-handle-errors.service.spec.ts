import { TestBed } from '@angular/core/testing';

import { FirebaseHandleErrorsService } from './firebase-handle-errors.service';

describe('FirebaseHandleErrorsService', () => {
  let service: FirebaseHandleErrorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseHandleErrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

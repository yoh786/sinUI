import { TestBed } from '@angular/core/testing';

import { FirelistService } from './firelist.service';

describe('FirelistService', () => {
  let service: FirelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

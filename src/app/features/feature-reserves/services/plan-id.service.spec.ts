import { TestBed } from '@angular/core/testing';

import { PlanIdService } from './plan-id.service';

describe('PlanIdService', () => {
  let service: PlanIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ChaletIdService } from './chalet-id.service';

describe('ChaletIdService', () => {
  let service: ChaletIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaletIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ChaletService } from './chalet.service';

describe('ChaletService', () => {
  let service: ChaletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

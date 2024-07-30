import { TestBed } from '@angular/core/testing';

import { ChangePasswordService } from './changepassword.service';

describe('ChangepasswordService', () => {
  let service: ChangePasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangePasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

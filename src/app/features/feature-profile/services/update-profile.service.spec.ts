import { TestBed } from '@angular/core/testing';
import { UpdateProfile } from '../models/update-profile';
describe('UpdateProfileService', () => {
  let service: UpdateProfile;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateProfile);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

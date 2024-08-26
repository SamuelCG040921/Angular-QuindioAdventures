import { TestBed } from '@angular/core/testing';

import { CountPeopleService } from './count-people.service';

describe('CountPeopleService', () => {
  let service: CountPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

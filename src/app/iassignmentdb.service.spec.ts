import { TestBed } from '@angular/core/testing';

import { IassignmentdbService } from './iassignmentdb.service';

describe('IassignmentdbService', () => {
  let service: IassignmentdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IassignmentdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

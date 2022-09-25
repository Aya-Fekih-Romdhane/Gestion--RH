import { TestBed } from '@angular/core/testing';

import { DataemployeeService } from './dataemployee.service';

describe('DataemployeeService', () => {
  let service: DataemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DatadepService } from './datadep.service';

describe('DatadepService', () => {
  let service: DatadepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatadepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

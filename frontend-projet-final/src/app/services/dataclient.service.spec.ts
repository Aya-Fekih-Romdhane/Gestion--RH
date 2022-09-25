import { TestBed } from '@angular/core/testing';

import { DataclientService } from './dataclient.service';

describe('DataclientService', () => {
  let service: DataclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

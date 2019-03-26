import { TestBed } from '@angular/core/testing';

import { DataCommunicatorService } from './data-communicator.service';

describe('DataCommunicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCommunicatorService = TestBed.get(DataCommunicatorService);
    expect(service).toBeTruthy();
  });
});

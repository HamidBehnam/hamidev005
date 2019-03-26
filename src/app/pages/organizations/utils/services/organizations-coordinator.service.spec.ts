import { TestBed } from '@angular/core/testing';

import { OrganizationsCoordinatorService } from './organizations-coordinator.service';

describe('OrganizationsCoordinatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizationsCoordinatorService = TestBed.get(OrganizationsCoordinatorService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetApisService } from './get-apis.service';

describe('GetApisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetApisService = TestBed.get(GetApisService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AgroquimicosServiceService } from './agroquimicos-service.service';

describe('AgroquimicosServiceService', () => {
  let service: AgroquimicosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgroquimicosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

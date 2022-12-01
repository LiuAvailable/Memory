import { TestBed } from '@angular/core/testing';

import { TaulerService } from './tauler.service';

describe('TaulerService', () => {
  let service: TaulerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaulerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

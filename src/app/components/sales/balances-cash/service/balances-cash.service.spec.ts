import { TestBed } from '@angular/core/testing';

import { BalancesCashService } from './balances-cash.service';

describe('BalancesCashService', () => {
  let service: BalancesCashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalancesCashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FoodPackagesService } from './food-packages.service';

describe('FoodPackagesService', () => {
  let service: FoodPackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodPackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

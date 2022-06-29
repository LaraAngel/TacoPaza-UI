import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPackagesComponent } from './food-packages.component';

describe('FoodPackagesComponent', () => {
  let component: FoodPackagesComponent;
  let fixture: ComponentFixture<FoodPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodPackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

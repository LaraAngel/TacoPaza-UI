import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCateoriesListComponent } from './food-cateories-list.component';

describe('FoodCateoriesListComponent', () => {
  let component: FoodCateoriesListComponent;
  let fixture: ComponentFixture<FoodCateoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodCateoriesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodCateoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

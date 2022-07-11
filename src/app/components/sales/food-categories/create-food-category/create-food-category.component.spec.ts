import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFoodCategoryComponent } from './create-food-category.component';

describe('CreateFoodCategoryComponent', () => {
  let component: CreateFoodCategoryComponent;
  let fixture: ComponentFixture<CreateFoodCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFoodCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFoodCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

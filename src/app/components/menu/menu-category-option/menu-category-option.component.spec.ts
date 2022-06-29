import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCategoryOptionComponent } from './menu-category-option.component';

describe('MenuCategoryOptionComponent', () => {
  let component: MenuCategoryOptionComponent;
  let fixture: ComponentFixture<MenuCategoryOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCategoryOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCategoryOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

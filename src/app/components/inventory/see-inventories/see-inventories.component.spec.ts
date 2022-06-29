import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeInventoriesComponent } from './see-inventories.component';

describe('SeeInventoriesComponent', () => {
  let component: SeeInventoriesComponent;
  let fixture: ComponentFixture<SeeInventoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeInventoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeInventoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

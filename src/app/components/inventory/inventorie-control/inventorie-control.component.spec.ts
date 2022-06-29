import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorieControlComponent } from './inventorie-control.component';

describe('InventorieControlComponent', () => {
  let component: InventorieControlComponent;
  let fixture: ComponentFixture<InventorieControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorieControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorieControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

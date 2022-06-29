import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectPurchaseComponent } from './direct-purchase.component';

describe('DirectPurchaseComponent', () => {
  let component: DirectPurchaseComponent;
  let fixture: ComponentFixture<DirectPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectPurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancesCashComponent } from './balances-cash.component';

describe('BalancesCashComponent', () => {
  let component: BalancesCashComponent;
  let fixture: ComponentFixture<BalancesCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalancesCashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalancesCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

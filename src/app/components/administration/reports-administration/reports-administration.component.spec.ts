import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAdministrationComponent } from './reports-administration.component';

describe('ReportsAdministrationComponent', () => {
  let component: ReportsAdministrationComponent;
  let fixture: ComponentFixture<ReportsAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsAdministrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

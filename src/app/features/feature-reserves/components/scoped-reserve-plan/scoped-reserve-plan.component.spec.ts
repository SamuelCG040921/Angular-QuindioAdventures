import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedReservePlanComponent } from './scoped-reserve-plan.component';

describe('ScopedReservePlanComponent', () => {
  let component: ScopedReservePlanComponent;
  let fixture: ComponentFixture<ScopedReservePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScopedReservePlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScopedReservePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

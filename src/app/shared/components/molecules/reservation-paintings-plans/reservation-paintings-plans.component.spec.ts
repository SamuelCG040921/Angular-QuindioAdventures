import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPaintingsPlansComponent } from './reservation-paintings-plans.component';

describe('ReservationPaintingsPlansComponent', () => {
  let component: ReservationPaintingsPlansComponent;
  let fixture: ComponentFixture<ReservationPaintingsPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationPaintingsPlansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationPaintingsPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

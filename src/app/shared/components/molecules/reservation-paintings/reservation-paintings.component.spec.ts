import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPaintingsComponent } from './reservation-paintings.component';

describe('ReservationPaintingsComponent', () => {
  let component: ReservationPaintingsComponent;
  let fixture: ComponentFixture<ReservationPaintingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationPaintingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationPaintingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

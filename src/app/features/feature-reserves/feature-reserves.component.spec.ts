import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureReservesComponent } from './feature-reserves.component';

describe('FeatureReservesComponent', () => {
  let component: FeatureReservesComponent;
  let fixture: ComponentFixture<FeatureReservesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureReservesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

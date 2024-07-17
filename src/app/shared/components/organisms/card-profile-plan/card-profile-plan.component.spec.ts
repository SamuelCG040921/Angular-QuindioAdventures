import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfilePlanComponent } from './card-profile-plan.component';

describe('CardProfilePlanComponent', () => {
  let component: CardProfilePlanComponent;
  let fixture: ComponentFixture<CardProfilePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardProfilePlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardProfilePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

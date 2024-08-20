import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlanAdministatorComponent } from './card-plan-administator.component';

describe('CardPlanAdministatorComponent', () => {
  let component: CardPlanAdministatorComponent;
  let fixture: ComponentFixture<CardPlanAdministatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPlanAdministatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPlanAdministatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

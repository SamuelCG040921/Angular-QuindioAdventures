import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChaletComponent } from './card-chalet.component';

describe('CardChaletComponent', () => {
  let component: CardChaletComponent;
  let fixture: ComponentFixture<CardChaletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardChaletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardChaletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

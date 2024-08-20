import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChaletAdministatorComponent } from './card-chalet-administator.component';

describe('CardChaletAdministatorComponent', () => {
  let component: CardChaletAdministatorComponent;
  let fixture: ComponentFixture<CardChaletAdministatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardChaletAdministatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardChaletAdministatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

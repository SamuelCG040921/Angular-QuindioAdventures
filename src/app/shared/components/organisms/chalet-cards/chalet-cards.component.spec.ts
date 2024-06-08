import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaletCardsComponent } from './chalet-cards.component';

describe('ChaletCardsComponent', () => {
  let component: ChaletCardsComponent;
  let fixture: ComponentFixture<ChaletCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChaletCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaletCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

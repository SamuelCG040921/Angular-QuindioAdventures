import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedsCardsComponent } from './recommendeds-cards.component';

describe('RecommendedsCardsComponent', () => {
  let component: RecommendedsCardsComponent;
  let fixture: ComponentFixture<RecommendedsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecommendedsCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendedsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

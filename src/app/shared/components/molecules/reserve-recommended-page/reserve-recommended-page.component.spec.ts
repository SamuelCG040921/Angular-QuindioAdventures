import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveRecommendedPageComponent } from './reserve-recommended-page.component';

describe('ReserveRecommendedPageComponent', () => {
  let component: ReserveRecommendedPageComponent;
  let fixture: ComponentFixture<ReserveRecommendedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReserveRecommendedPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReserveRecommendedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

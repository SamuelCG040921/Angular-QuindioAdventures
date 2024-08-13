import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecommendComponent } from './page-recommend.component';

describe('PageRecommendComponent', () => {
  let component: PageRecommendComponent;
  let fixture: ComponentFixture<PageRecommendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageRecommendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

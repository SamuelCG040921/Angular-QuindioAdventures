import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePlansComponent } from './feature-plans.component';

describe('FeaturePlansComponent', () => {
  let component: FeaturePlansComponent;
  let fixture: ComponentFixture<FeaturePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturePlansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

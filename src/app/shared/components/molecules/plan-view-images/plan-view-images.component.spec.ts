import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanViewImagesComponent } from './plan-view-images.component';

describe('PlanViewImagesComponent', () => {
  let component: PlanViewImagesComponent;
  let fixture: ComponentFixture<PlanViewImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanViewImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanViewImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

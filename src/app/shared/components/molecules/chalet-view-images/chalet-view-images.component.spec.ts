import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaletViewImagesComponent } from './chalet-view-images.component';

describe('ChaletViewImagesComponent', () => {
  let component: ChaletViewImagesComponent;
  let fixture: ComponentFixture<ChaletViewImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChaletViewImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaletViewImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

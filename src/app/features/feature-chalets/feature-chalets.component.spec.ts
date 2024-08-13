import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureChaletsComponent } from './feature-chalets.component';

describe('FeatureChaletsComponent', () => {
  let component: FeatureChaletsComponent;
  let fixture: ComponentFixture<FeatureChaletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureChaletsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureChaletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

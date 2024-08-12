import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAdminComponent } from './feature-admin.component';

describe('FeatureAdminComponent', () => {
  let component: FeatureAdminComponent;
  let fixture: ComponentFixture<FeatureAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

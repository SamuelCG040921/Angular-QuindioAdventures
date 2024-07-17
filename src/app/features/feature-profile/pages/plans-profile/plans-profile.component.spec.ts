import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansProfileComponent } from './plans-profile.component';

describe('PlansProfileComponent', () => {
  let component: PlansProfileComponent;
  let fixture: ComponentFixture<PlansProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlansProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlansProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

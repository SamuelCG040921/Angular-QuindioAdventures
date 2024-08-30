import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEditFormComponent } from './plan-edit-form.component';

describe('PlanEditFormComponent', () => {
  let component: PlanEditFormComponent;
  let fixture: ComponentFixture<PlanEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanRegisterFormComponent } from './plan-register-form.component';

describe('PlanRegisterFormComponent', () => {
  let component: PlanRegisterFormComponent;
  let fixture: ComponentFixture<PlanRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanRegisterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

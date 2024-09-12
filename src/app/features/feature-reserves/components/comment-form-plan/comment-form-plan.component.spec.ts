import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFormPlanComponent } from './comment-form-plan.component';

describe('CommentFormPlanComponent', () => {
  let component: CommentFormPlanComponent;
  let fixture: ComponentFixture<CommentFormPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentFormPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentFormPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

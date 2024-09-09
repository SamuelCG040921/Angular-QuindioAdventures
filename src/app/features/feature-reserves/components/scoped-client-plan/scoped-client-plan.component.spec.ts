import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedClientPlanComponent } from './scoped-client-plan.component';

describe('ScopedClientPlanComponent', () => {
  let component: ScopedClientPlanComponent;
  let fixture: ComponentFixture<ScopedClientPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScopedClientPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScopedClientPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

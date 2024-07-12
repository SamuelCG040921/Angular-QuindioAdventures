import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaletPlanAttendantComponent } from './chalet-plan-attendant.component';

describe('ChaletPlanAttendantComponent', () => {
  let component: ChaletPlanAttendantComponent;
  let fixture: ComponentFixture<ChaletPlanAttendantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChaletPlanAttendantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaletPlanAttendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesTablePlanComponent } from './prices-table-plan.component';

describe('PricesTablePlanComponent', () => {
  let component: PricesTablePlanComponent;
  let fixture: ComponentFixture<PricesTablePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricesTablePlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricesTablePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

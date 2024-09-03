import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlanPaymentComponent } from './page-plan-payment.component';

describe('PagePlanPaymentComponent', () => {
  let component: PagePlanPaymentComponent;
  let fixture: ComponentFixture<PagePlanPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagePlanPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePlanPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

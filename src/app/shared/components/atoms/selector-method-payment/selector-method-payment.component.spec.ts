import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorMethodPaymentComponent } from './selector-method-payment.component';

describe('SelectorMethodPaymentComponent', () => {
  let component: SelectorMethodPaymentComponent;
  let fixture: ComponentFixture<SelectorMethodPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectorMethodPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectorMethodPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

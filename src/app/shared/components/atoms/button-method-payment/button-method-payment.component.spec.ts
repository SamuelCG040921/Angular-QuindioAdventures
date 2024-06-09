import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMethodPaymentComponent } from './button-method-payment.component';

describe('ButtonMethodPaymentComponent', () => {
  let component: ButtonMethodPaymentComponent;
  let fixture: ComponentFixture<ButtonMethodPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonMethodPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonMethodPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

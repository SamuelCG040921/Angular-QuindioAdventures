import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChaletPaymentComponent } from './page-chalet-payment.component';

describe('PageChaletPaymentComponent', () => {
  let component: PageChaletPaymentComponent;
  let fixture: ComponentFixture<PageChaletPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageChaletPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageChaletPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

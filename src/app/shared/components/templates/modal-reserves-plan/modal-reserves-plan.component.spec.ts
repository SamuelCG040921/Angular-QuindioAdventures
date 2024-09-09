import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReservesPlanComponent } from './modal-reserves-plan.component';

describe('ModalReservesPlanComponent', () => {
  let component: ModalReservesPlanComponent;
  let fixture: ComponentFixture<ModalReservesPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalReservesPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalReservesPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

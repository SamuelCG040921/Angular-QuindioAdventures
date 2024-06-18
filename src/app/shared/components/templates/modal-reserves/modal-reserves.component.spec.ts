import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReservesComponent } from './modal-reserves.component';

describe('ModalReservesComponent', () => {
  let component: ModalReservesComponent;
  let fixture: ComponentFixture<ModalReservesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalReservesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

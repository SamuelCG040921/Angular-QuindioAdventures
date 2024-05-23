import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedModalReserveDetailsComponent } from './scoped-modal-reserve-details.component';

describe('ScopedModalReserveDetailsComponent', () => {
  let component: ScopedModalReserveDetailsComponent;
  let fixture: ComponentFixture<ScopedModalReserveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScopedModalReserveDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScopedModalReserveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

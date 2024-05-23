import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedReserveComponent } from './scoped-reserve.component';

describe('ScopedReserveComponent', () => {
  let component: ScopedReserveComponent;
  let fixture: ComponentFixture<ScopedReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScopedReserveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScopedReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

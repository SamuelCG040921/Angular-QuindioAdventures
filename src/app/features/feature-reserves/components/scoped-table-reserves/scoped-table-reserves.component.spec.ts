import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedTableReservesComponent } from './scoped-table-reserves.component';

describe('ScopedTableReservesComponent', () => {
  let component: ScopedTableReservesComponent;
  let fixture: ComponentFixture<ScopedTableReservesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScopedTableReservesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScopedTableReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

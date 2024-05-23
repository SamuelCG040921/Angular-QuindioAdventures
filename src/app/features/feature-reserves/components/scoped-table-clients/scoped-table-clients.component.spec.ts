import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedTableClientsComponent } from './scoped-table-clients.component';

describe('ScopedTableClientsComponent', () => {
  let component: ScopedTableClientsComponent;
  let fixture: ComponentFixture<ScopedTableClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScopedTableClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScopedTableClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

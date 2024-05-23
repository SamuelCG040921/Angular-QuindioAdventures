import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedModalClientDetailsComponent } from './scoped-modal-client-details.component';

describe('ScopedModalClientDetailsComponent', () => {
  let component: ScopedModalClientDetailsComponent;
  let fixture: ComponentFixture<ScopedModalClientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScopedModalClientDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScopedModalClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

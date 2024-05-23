import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedClientComponent } from './scoped-client.component';

describe('ScopedClientComponent', () => {
  let component: ScopedClientComponent;
  let fixture: ComponentFixture<ScopedClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScopedClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScopedClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

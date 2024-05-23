import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedBackgroundMenuComponent } from './scoped-background-menu.component';

describe('ScopedBackgroundMenuComponent', () => {
  let component: ScopedBackgroundMenuComponent;
  let fixture: ComponentFixture<ScopedBackgroundMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScopedBackgroundMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScopedBackgroundMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

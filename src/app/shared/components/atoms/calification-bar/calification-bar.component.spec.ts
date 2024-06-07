import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificationBarComponent } from './calification-bar.component';

describe('CalificationBarComponent', () => {
  let component: CalificationBarComponent;
  let fixture: ComponentFixture<CalificationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalificationBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalificationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

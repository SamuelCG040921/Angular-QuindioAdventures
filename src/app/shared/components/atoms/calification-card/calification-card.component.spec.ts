import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificationCardComponent } from './calification-card.component';

describe('CalificationCardComponent', () => {
  let component: CalificationCardComponent;
  let fixture: ComponentFixture<CalificationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalificationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalificationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

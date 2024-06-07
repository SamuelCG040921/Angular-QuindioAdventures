import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificationBallsComponent } from './calification-balls.component';

describe('CalificationBallsComponent', () => {
  let component: CalificationBallsComponent;
  let fixture: ComponentFixture<CalificationBallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalificationBallsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalificationBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

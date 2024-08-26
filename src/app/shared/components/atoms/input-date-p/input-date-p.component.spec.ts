import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDatePComponent } from './input-date-p.component';

describe('InputDatePComponent', () => {
  let component: InputDatePComponent;
  let fixture: ComponentFixture<InputDatePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputDatePComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputDatePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

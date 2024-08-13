import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPaintingsComponent } from './input-paintings.component';

describe('InputPaintingsComponent', () => {
  let component: InputPaintingsComponent;
  let fixture: ComponentFixture<InputPaintingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputPaintingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputPaintingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

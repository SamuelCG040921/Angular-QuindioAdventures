import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPlusMinumComponent } from './button-plus-minum.component';

describe('ButtonPlusMinumComponent', () => {
  let component: ButtonPlusMinumComponent;
  let fixture: ComponentFixture<ButtonPlusMinumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonPlusMinumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonPlusMinumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonProfileComponent } from './button-profile.component';

describe('ButtonProfileComponent', () => {
  let component: ButtonProfileComponent;
  let fixture: ComponentFixture<ButtonProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

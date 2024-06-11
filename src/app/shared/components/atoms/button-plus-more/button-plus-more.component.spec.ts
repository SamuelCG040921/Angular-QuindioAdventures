import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPlusMoreComponent } from './button-plus-more.component';

describe('ButtonPlusMoreComponent', () => {
  let component: ButtonPlusMoreComponent;
  let fixture: ComponentFixture<ButtonPlusMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonPlusMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonPlusMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

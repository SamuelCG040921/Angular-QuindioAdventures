import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterInputComponent } from './login-register-input.component';

describe('LoginRegisterInputComponent', () => {
  let component: LoginRegisterInputComponent;
  let fixture: ComponentFixture<LoginRegisterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginRegisterInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginRegisterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

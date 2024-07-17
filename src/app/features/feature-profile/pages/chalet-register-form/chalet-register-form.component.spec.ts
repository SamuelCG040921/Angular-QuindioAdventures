import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaletRegisterFormComponent } from './chalet-register-form.component';

describe('ChaletRegisterFormComponent', () => {
  let component: ChaletRegisterFormComponent;
  let fixture: ComponentFixture<ChaletRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChaletRegisterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaletRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWelcomeEditComponent } from './profile-welcome-edit.component';

describe('ProfileWelcomeEditComponent', () => {
  let component: ProfileWelcomeEditComponent;
  let fixture: ComponentFixture<ProfileWelcomeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileWelcomeEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileWelcomeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

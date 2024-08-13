import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWelcomeComponent } from './profile-welcome.component';

describe('ProfileWelcomeComponent', () => {
  let component: ProfileWelcomeComponent;
  let fixture: ComponentFixture<ProfileWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileWelcomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

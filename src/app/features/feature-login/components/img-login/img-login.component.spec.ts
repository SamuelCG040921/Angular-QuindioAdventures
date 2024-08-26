import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgLoginComponent } from './img-login.component';

describe('ImgLoginComponent', () => {
  let component: ImgLoginComponent;
  let fixture: ComponentFixture<ImgLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

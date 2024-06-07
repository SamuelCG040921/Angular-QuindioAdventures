import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInputComponent } from './footer-input.component';

describe('FooterInputComponent', () => {
  let component: FooterInputComponent;
  let fixture: ComponentFixture<FooterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

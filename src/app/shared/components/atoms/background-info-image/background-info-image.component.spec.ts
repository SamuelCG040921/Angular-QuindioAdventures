import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundInfoImageComponent } from './background-info-image.component';

describe('BackgroundInfoImageComponent', () => {
  let component: BackgroundInfoImageComponent;
  let fixture: ComponentFixture<BackgroundInfoImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackgroundInfoImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgroundInfoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

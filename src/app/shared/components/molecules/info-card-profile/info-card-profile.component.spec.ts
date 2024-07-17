import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardProfileComponent } from './info-card-profile.component';

describe('InfoCardProfileComponent', () => {
  let component: InfoCardProfileComponent;
  let fixture: ComponentFixture<InfoCardProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoCardProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoCardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

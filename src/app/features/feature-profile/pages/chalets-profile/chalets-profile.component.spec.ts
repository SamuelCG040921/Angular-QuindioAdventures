import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaletsProfileComponent } from './chalets-profile.component';

describe('ChaletsProfileComponent', () => {
  let component: ChaletsProfileComponent;
  let fixture: ComponentFixture<ChaletsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChaletsProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaletsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

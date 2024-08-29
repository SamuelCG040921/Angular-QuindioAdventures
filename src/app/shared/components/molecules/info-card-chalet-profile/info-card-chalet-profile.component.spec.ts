import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardChaletProfileComponent } from './info-card-chalet-profile.component';

describe('InfoCardChaletProfileComponent', () => {
  let component: InfoCardChaletProfileComponent;
  let fixture: ComponentFixture<InfoCardChaletProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoCardChaletProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoCardChaletProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

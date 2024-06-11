import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegationMapComponent } from './navegation-map.component';

describe('NavegationMapComponent', () => {
  let component: NavegationMapComponent;
  let fixture: ComponentFixture<NavegationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavegationMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavegationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicationCardComponent } from './ubication-card.component';

describe('UbicationCardComponent', () => {
  let component: UbicationCardComponent;
  let fixture: ComponentFixture<UbicationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UbicationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UbicationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabTypeSelectorComponent } from './hab-type-selector.component';

describe('HabTypeSelectorComponent', () => {
  let component: HabTypeSelectorComponent;
  let fixture: ComponentFixture<HabTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HabTypeSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

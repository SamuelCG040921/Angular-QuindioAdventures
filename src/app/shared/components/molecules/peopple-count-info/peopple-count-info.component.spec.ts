import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoppleCountInfoComponent } from './peopple-count-info.component';

describe('PeoppleCountInfoComponent', () => {
  let component: PeoppleCountInfoComponent;
  let fixture: ComponentFixture<PeoppleCountInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeoppleCountInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeoppleCountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

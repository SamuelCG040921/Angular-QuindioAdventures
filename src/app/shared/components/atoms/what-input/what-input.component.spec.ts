import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatInputComponent } from './what-input.component';

describe('WhatInputComponent', () => {
  let component: WhatInputComponent;
  let fixture: ComponentFixture<WhatInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

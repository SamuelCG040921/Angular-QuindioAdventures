import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereInputComponent } from './where-input.component';

describe('WhereInputComponent', () => {
  let component: WhereInputComponent;
  let fixture: ComponentFixture<WhereInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhereInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhereInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

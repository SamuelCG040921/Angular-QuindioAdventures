import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesWarningComponent } from './messages-warning.component';

describe('MessagesWarningComponent', () => {
  let component: MessagesWarningComponent;
  let fixture: ComponentFixture<MessagesWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagesWarningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagesWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

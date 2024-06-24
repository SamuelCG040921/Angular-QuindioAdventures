import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesSuccesfulComponent } from './messages-succesful.component';

describe('MessagesSuccesfulComponent', () => {
  let component: MessagesSuccesfulComponent;
  let fixture: ComponentFixture<MessagesSuccesfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagesSuccesfulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagesSuccesfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

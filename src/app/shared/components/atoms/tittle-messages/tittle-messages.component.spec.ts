import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TittleMessagesComponent } from './tittle-messages.component';

describe('TittleMessagesComponent', () => {
  let component: TittleMessagesComponent;
  let fixture: ComponentFixture<TittleMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TittleMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TittleMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

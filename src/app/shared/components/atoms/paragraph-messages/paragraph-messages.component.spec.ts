import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphMessagesComponent } from './paragraph-messages.component';

describe('ParagraphMessagesComponent', () => {
  let component: ParagraphMessagesComponent;
  let fixture: ComponentFixture<ParagraphMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParagraphMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParagraphMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

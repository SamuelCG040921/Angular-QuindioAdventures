import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationAttendantComponent } from './communication-attendant.component';

describe('CommunicationAttendantComponent', () => {
  let component: CommunicationAttendantComponent;
  let fixture: ComponentFixture<CommunicationAttendantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommunicationAttendantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunicationAttendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

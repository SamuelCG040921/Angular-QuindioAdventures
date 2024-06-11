import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconServicesComponent } from './icon-services.component';

describe('IconServicesComponent', () => {
  let component: IconServicesComponent;
  let fixture: ComponentFixture<IconServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

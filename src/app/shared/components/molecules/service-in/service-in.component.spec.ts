import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInComponent } from './service-in.component';

describe('ServiceInComponent', () => {
  let component: ServiceInComponent;
  let fixture: ComponentFixture<ServiceInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

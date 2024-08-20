import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansAdministratorComponent } from './plans-administrator.component';

describe('PlansAdministratorComponent', () => {
  let component: PlansAdministratorComponent;
  let fixture: ComponentFixture<PlansAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlansAdministratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlansAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

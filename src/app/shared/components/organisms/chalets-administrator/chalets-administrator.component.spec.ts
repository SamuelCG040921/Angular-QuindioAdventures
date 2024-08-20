import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaletsAdministratorComponent } from './chalets-administrator.component';

describe('ChaletsAdministratorComponent', () => {
  let component: ChaletsAdministratorComponent;
  let fixture: ComponentFixture<ChaletsAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChaletsAdministratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaletsAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

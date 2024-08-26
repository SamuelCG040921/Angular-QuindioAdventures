import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChaletsComponent } from './admin-chalets.component';

describe('AdminChaletsComponent', () => {
  let component: AdminChaletsComponent;
  let fixture: ComponentFixture<AdminChaletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminChaletsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminChaletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

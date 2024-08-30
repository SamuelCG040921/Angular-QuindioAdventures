import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaletEditFormComponent } from './chalet-edit-form.component';

describe('ChaletEditFormComponent', () => {
  let component: ChaletEditFormComponent;
  let fixture: ComponentFixture<ChaletEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChaletEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaletEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlanComponent } from './page-plan.component';

describe('PagePlanComponent', () => {
  let component: PagePlanComponent;
  let fixture: ComponentFixture<PagePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagePlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

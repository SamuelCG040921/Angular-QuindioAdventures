import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlanDetailsComponent } from './page-plan-details.component';

describe('PagePlanDetailsComponent', () => {
  let component: PagePlanDetailsComponent;
  let fixture: ComponentFixture<PagePlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagePlanDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

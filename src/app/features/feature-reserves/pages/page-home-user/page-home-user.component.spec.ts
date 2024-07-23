import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeUserComponent } from './page-home-user.component';

describe('PageHomeUserComponent', () => {
  let component: PageHomeUserComponent;
  let fixture: ComponentFixture<PageHomeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageHomeUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageHomeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

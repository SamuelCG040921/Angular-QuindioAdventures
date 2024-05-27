import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReservesReservesComponent } from './page-reserves-reserves.component';

describe('PageReservesReservesComponent', () => {
  let component: PageReservesReservesComponent;
  let fixture: ComponentFixture<PageReservesReservesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageReservesReservesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageReservesReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

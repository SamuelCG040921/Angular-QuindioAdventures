import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReservesClientsComponent } from './page-reserves-clients.component';

describe('PageReservesClientsComponent', () => {
  let component: PageReservesClientsComponent;
  let fixture: ComponentFixture<PageReservesClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageReservesClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageReservesClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

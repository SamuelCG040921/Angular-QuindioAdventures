import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLogueadoComponent } from './nav-logueado.component';

describe('NavLogueadoComponent', () => {
  let component: NavLogueadoComponent;
  let fixture: ComponentFixture<NavLogueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavLogueadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavLogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

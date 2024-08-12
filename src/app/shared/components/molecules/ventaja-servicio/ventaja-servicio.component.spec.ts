import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentajaServicioComponent } from './ventaja-servicio.component';

describe('VentajaServicioComponent', () => {
  let component: VentajaServicioComponent;
  let fixture: ComponentFixture<VentajaServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentajaServicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentajaServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

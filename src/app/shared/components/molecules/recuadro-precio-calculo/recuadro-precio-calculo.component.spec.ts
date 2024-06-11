import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuadroPrecioCalculoComponent } from './recuadro-precio-calculo.component';

describe('RecuadroPrecioCalculoComponent', () => {
  let component: RecuadroPrecioCalculoComponent;
  let fixture: ComponentFixture<RecuadroPrecioCalculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecuadroPrecioCalculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecuadroPrecioCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

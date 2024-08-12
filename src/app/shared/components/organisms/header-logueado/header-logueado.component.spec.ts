import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLogueadoComponent } from './header-logueado.component';

describe('HeaderLogueadoComponent', () => {
  let component: HeaderLogueadoComponent;
  let fixture: ComponentFixture<HeaderLogueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderLogueadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderLogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigaDePanComponent } from './miga-de-pan.component';

describe('MigaDePanComponent', () => {
  let component: MigaDePanComponent;
  let fixture: ComponentFixture<MigaDePanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MigaDePanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MigaDePanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

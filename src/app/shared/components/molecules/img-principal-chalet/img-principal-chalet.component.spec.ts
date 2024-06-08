import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPrincipalChaletComponent } from './img-principal-chalet.component';

describe('ImgPrincipalChaletComponent', () => {
  let component: ImgPrincipalChaletComponent;
  let fixture: ComponentFixture<ImgPrincipalChaletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgPrincipalChaletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgPrincipalChaletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

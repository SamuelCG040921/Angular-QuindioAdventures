import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChaletComponent } from './page-chalet.component';

describe('PageChaletComponent', () => {
  let component: PageChaletComponent;
  let fixture: ComponentFixture<PageChaletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageChaletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageChaletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

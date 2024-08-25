import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChaletMethodComponent } from './page-chalet-method.component';

describe('PageChaletMethodComponent', () => {
  let component: PageChaletMethodComponent;
  let fixture: ComponentFixture<PageChaletMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageChaletMethodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageChaletMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

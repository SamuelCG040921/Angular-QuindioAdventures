import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChaletDetailsComponent } from './page-chalet-details.component';

describe('PageChaletDetailsComponent', () => {
  let component: PageChaletDetailsComponent;
  let fixture: ComponentFixture<PageChaletDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageChaletDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageChaletDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountPeoppleComponent } from './count-peopple.component';

describe('CountPeoppleComponent', () => {
  let component: CountPeoppleComponent;
  let fixture: ComponentFixture<CountPeoppleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountPeoppleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountPeoppleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

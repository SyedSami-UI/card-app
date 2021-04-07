import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacCardComponent } from './mac-card.component';

describe('MacCardComponent', () => {
  let component: MacCardComponent;
  let fixture: ComponentFixture<MacCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

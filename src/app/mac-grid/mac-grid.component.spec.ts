import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacGridComponent } from './mac-grid.component';

describe('MacGridComponent', () => {
  let component: MacGridComponent;
  let fixture: ComponentFixture<MacGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

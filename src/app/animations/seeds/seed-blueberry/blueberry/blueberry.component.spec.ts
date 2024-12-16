import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueberryComponent } from './blueberry.component';

describe('BlueberryComponent', () => {
  let component: BlueberryComponent;
  let fixture: ComponentFixture<BlueberryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlueberryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueberryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

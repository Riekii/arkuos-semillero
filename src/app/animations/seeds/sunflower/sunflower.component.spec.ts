import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunflowerComponent } from './sunflower.component';

describe('SunflowerComponent', () => {
  let component: SunflowerComponent;
  let fixture: ComponentFixture<SunflowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunflowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunflowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

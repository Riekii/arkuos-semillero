import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedBlueberryComponent } from './seed-blueberry.component';

describe('SeedBlueberryComponent', () => {
  let component: SeedBlueberryComponent;
  let fixture: ComponentFixture<SeedBlueberryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeedBlueberryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeedBlueberryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

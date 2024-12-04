import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationSunComponent } from './animation-sun.component';

describe('AnimationSunComponent', () => {
  let component: AnimationSunComponent;
  let fixture: ComponentFixture<AnimationSunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationSunComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationSunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

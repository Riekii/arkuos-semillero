import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationSeedIndComponent } from './animation-seed-ind.component';

describe('AnimationSeedIndComponent', () => {
  let component: AnimationSeedIndComponent;
  let fixture: ComponentFixture<AnimationSeedIndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationSeedIndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationSeedIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

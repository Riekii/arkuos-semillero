import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationSeedComponent } from './animation-seed.component';

describe('AnimationSeedComponent', () => {
  let component: AnimationSeedComponent;
  let fixture: ComponentFixture<AnimationSeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationSeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationSeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

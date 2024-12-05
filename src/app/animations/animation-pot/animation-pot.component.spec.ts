import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationPotComponent } from './animation-pot.component';

describe('AnimationPotComponent', () => {
  let component: AnimationPotComponent;
  let fixture: ComponentFixture<AnimationPotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationPotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationPotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

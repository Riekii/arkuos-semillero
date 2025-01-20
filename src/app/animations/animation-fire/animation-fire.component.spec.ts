import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationFireComponent } from './animation-fire.component';

describe('AnimationFireComponent', () => {
  let component: AnimationFireComponent;
  let fixture: ComponentFixture<AnimationFireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationFireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

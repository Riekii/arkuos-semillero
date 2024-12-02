import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationLeafsComponent } from './animation-leafs.component';

describe('AnimationLeafsComponent', () => {
  let component: AnimationLeafsComponent;
  let fixture: ComponentFixture<AnimationLeafsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationLeafsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationLeafsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

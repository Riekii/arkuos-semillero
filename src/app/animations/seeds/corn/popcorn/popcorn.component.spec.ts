import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopcornComponent } from './popcorn.component';

describe('PopcornComponent', () => {
  let component: PopcornComponent;
  let fixture: ComponentFixture<PopcornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopcornComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopcornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

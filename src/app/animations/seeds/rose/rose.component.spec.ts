import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoseComponent } from './rose.component';

describe('RoseComponent', () => {
  let component: RoseComponent;
  let fixture: ComponentFixture<RoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

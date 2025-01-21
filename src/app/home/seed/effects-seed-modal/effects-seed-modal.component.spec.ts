import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectsSeedModalComponent } from './effects-seed-modal.component';

describe('EffectsSeedModalComponent', () => {
  let component: EffectsSeedModalComponent;
  let fixture: ComponentFixture<EffectsSeedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectsSeedModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectsSeedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

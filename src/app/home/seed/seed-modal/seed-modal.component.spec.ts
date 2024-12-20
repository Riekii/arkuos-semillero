import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedModalComponent } from './seed-modal.component';

describe('SeedModalComponent', () => {
  let component: SeedModalComponent;
  let fixture: ComponentFixture<SeedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeedModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

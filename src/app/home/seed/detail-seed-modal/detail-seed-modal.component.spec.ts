import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSeedModalComponent } from './detail-seed-modal.component';

describe('DetailSeedModalComponent', () => {
  let component: DetailSeedModalComponent;
  let fixture: ComponentFixture<DetailSeedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailSeedModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailSeedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

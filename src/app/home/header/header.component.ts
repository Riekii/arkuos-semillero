import { Component } from '@angular/core';
import { SeedModalComponent } from '../seed/seed-modal/seed-modal.component';
import { AnimationSeedComponent } from '../../animations/animation-seed/animation-seed.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SeedModalComponent, AnimationSeedComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

import { Component } from '@angular/core';
import { SeedModalComponent } from '../seed/new-seed-modal/new-seed-modal.component';
import { AnimationSeedComponent } from '../../animations/animation-seed/animation-seed.component';
import { SeparadorComponent } from '../../shared/separador/separador.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SeedModalComponent, AnimationSeedComponent, SeparadorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

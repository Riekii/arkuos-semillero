import { Component } from '@angular/core';
import { AnimationSeedComponent } from '../../animations/animation-seed/animation-seed.component';
import { SeparadorComponent } from '../../shared/separador/separador.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AnimationSeedComponent, SeparadorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

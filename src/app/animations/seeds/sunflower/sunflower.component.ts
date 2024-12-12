import { Component } from '@angular/core';
import { AnimationPotComponent } from '../../animation-pot/animation-pot.component';

@Component({
  selector: 'seed-sunflower',
  standalone: true,
  imports: [AnimationPotComponent],
  templateUrl: './sunflower.component.html',
  styleUrl: './sunflower.component.scss'
})
export class SunflowerComponent {
  public sunflowerStart(){

  }
}

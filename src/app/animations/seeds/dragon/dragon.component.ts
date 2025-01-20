import { Component, Input } from '@angular/core';
import { AnimationPotComponent } from '../../animation-pot/animation-pot.component';

@Component({
  selector: 'seed-dragon',
  standalone: true,
  imports: [AnimationPotComponent],
  templateUrl: './dragon.component.html',
  styleUrl: './dragon.component.scss'
})
export class DragonComponent {
  @Input() seedData: any;

}

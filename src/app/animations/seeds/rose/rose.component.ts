import { Component, Input } from '@angular/core';
import { AnimationPotComponent } from '../../animation-pot/animation-pot.component';

@Component({
  selector: 'seed-rose',
  standalone: true,
  imports: [ AnimationPotComponent],
  templateUrl: './rose.component.html',
  styleUrl: './rose.component.scss'
})
export class RoseComponent {
  @Input() seedData: any;
}

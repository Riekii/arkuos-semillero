import { Component, Input } from '@angular/core';
import { AnimationPotComponent } from '../../animation-pot/animation-pot.component';

@Component({
  selector: 'seed-strawberry',
  standalone: true,
  imports: [ AnimationPotComponent],
  templateUrl: './strawberry.component.html',
  styleUrl: './strawberry.component.scss'
})
export class StrawberryComponent {
  @Input() seedData: any;
}

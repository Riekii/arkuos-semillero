import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'pot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animation-pot.component.html',
  styleUrl: './animation-pot.component.scss'
})
export class AnimationPotComponent {

  @Input() seedData: any;

}

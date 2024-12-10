import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimationPotComponent } from '../../animation-pot/animation-pot.component';

@Component({
  selector: 'seed-corn',
  standalone: true,
  imports: [CommonModule, AnimationPotComponent],
  templateUrl: './corn.component.html',
  styleUrl: './corn.component.scss'
})
export class CornComponent {
  popcornStart(){
    console.log('palomitas!')
  }
}

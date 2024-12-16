import { Component } from '@angular/core';
import { CornComponent } from '../../animations/seeds/corn/corn.component';
import { SunflowerComponent } from '../../animations/seeds/sunflower/sunflower.component';
import { AnimationPotComponent } from '../../animations/animation-pot/animation-pot.component';
import { SeedBlueberryComponent } from '../../animations/seeds/seed-blueberry/seed-blueberry.component';

@Component({
  selector: 'seed-container',
  standalone: true,
  imports: [CornComponent, SunflowerComponent, AnimationPotComponent, SeedBlueberryComponent],
  templateUrl: './seed.component.html',
  styleUrl: './seed.component.scss'
})
export class SeedComponent {

}

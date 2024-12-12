import { Component } from '@angular/core';
import { CornComponent } from '../../animations/seeds/corn/corn.component';
import { SunflowerComponent } from '../../animations/seeds/sunflower/sunflower.component';

@Component({
  selector: 'seed-container',
  standalone: true,
  imports: [CornComponent, SunflowerComponent],
  templateUrl: './seed.component.html',
  styleUrl: './seed.component.scss'
})
export class SeedComponent {

}

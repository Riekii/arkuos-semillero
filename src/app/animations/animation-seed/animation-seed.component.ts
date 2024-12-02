import { Component, OnInit } from '@angular/core';
import { AnimationSeedIndComponent } from './animation-seed-ind/animation-seed-ind.component';

@Component({
  selector: 'app-animation-seed',
  standalone: true,
  imports: [AnimationSeedIndComponent],
  templateUrl: './animation-seed.component.html',
  styleUrl: './animation-seed.component.scss'
})
export class AnimationSeedComponent implements OnInit{

  public height: string = '0px';
  public width: string = '0px';

  ngOnInit(): void {
    setTimeout(() => {
      this.height = '20em';
      this.width = '300px';
    }, 400);
  }

}

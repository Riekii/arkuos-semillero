import { Component, OnInit } from '@angular/core';
import { AnimationSeedIndComponent } from './animation-seed-ind/animation-seed-ind.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animation-seed',
  standalone: true,
  imports: [AnimationSeedIndComponent, CommonModule],
  templateUrl: './animation-seed.component.html',
  styleUrl: './animation-seed.component.scss'
})
export class AnimationSeedComponent implements OnInit{

  public height: string = '0px';
  public width: string = '0px';

  public seedsNumber: any = [1,1,1,1,1,1,1,1]

  ngOnInit(): void {
    setTimeout(() => {
      this.height = '20em';
      this.width = '300px';
    }, 400);
  }

}

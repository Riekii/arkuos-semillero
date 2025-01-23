import { Component, OnInit } from '@angular/core';
import { AnimationSeedIndComponent } from './animation-seed-ind/animation-seed-ind.component';
import { CommonModule } from '@angular/common';
import { AnimationSunComponent } from '../animation-sun/animation-sun.component';

@Component({
  selector: 'app-animation-seed',
  standalone: true,
  imports: [AnimationSeedIndComponent, CommonModule, AnimationSunComponent],
  templateUrl: './animation-seed.component.html',
  styleUrl: './animation-seed.component.scss'
})
export class AnimationSeedComponent implements OnInit{

  public seedsNumber: any;

  ngOnInit(): void {
    if(window.innerWidth <= 600){
      this.seedsNumber = [1, 1, 1]
    }
    else{
      this.seedsNumber = [1, 1, 1, 1, 1, 1, 1, 1];
    }
  }

}

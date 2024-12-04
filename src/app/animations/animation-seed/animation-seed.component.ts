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

  public seedsNumber: any = [1,1,1,1,1,1,1,1]

  ngOnInit(): void {
  }

}

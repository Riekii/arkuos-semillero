import { Component, Input, OnInit } from '@angular/core';
import { AnimationLeafsComponent } from '../../animation-leafs/animation-leafs.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animation-seed-ind',
  standalone: true,
  imports: [AnimationLeafsComponent, CommonModule],
  templateUrl: './animation-seed-ind.component.html',
  styleUrl: './animation-seed-ind.component.scss'
})
export class AnimationSeedIndComponent implements OnInit {
  public minHeight: number = 500;
  public maxHeight: number = 700;

  public height: string = '0px';
  public width: string = '0px';
  public border: string = '';

  public type: string = 'leaf';
  
  public leafs: any = [{ type: 'leaf' }, { type: 'leaf' }, { type: 'leaf' }, { type: 'leaf' }, { type: 'leaf' }, { type: 'leaf' }]

  ngOnInit(): void {
    setTimeout(() => {
      this.height = this.getRandomInt(this.minHeight, this.maxHeight) + 'px';
      this.border = "solid 12px"
      // this.width = this.getRandomInt(10, 20)+'px';
    }, 400);
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min); // Redondea hacia arriba el mínimo
    max = Math.floor(max); // Redondea hacia abajo el máximo
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}

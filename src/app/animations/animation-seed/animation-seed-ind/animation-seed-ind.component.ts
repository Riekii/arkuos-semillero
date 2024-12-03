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
  public minHeight: number = 300;
  public maxHeight: number = 700;

  public height: string = '0px';
  public width: string = '0px';
  public border: string = '';

  @Input() type: string = 'leaf';
  
  public leafs: any = [1,1,1,1]

  ngOnInit(): void {
    setTimeout(() => {
      if(this.type === 'leaf'){
        this.height = this.getRandomInt(this.minHeight, this.maxHeight) + 'px';
        this.border = "solid 12px"
      }
      else if(this.type === 'leafback'){
        this.height = this.getRandomInt(this.minHeight/2, this.maxHeight/1.5) + 'px';
        this.border = "solid 12px"
      }

    }, 400);
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min); // Redondea hacia arriba el mínimo
    max = Math.floor(max); // Redondea hacia abajo el máximo
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}

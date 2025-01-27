import { Component, Input, OnInit } from '@angular/core';
import { AnimationPotComponent } from '../../animation-pot/animation-pot.component';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './pipe/pipe.component';
import { SharedService } from '../../../service/shared.service';

@Component({
  selector: 'seed-sunflower',
  standalone: true,
  imports: [AnimationPotComponent, CommonModule, PipeComponent],
  templateUrl: './sunflower.component.html',
  styleUrl: './sunflower.component.scss'
})
export class SunflowerComponent implements OnInit{

  constructor(
    public shared: SharedService
  ){}

  public flowers: any = [];
  public pipes: any = [];

  @Input() seedData: any;

  ngOnInit(): void {
    for (let index = 0; index < 8; index++) {
      this.flowers.push({
        flower: 'yes :)'
      })
    }
  }

  public sunflowerStart(){
    this.pipes.push({
      mMax: this.shared.getRandomInt(-100, 100) + 'vh',
      lMax: this.shared.getRandomInt(-100, 100) + 'vw',
    })
    setTimeout(() => {
      this.pipes.shift()
    }, 1000);
  }
}

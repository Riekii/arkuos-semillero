import { Component, Input, OnInit } from '@angular/core';
import { AnimationPotComponent } from '../../animation-pot/animation-pot.component';
import { BlueberryComponent } from './blueberry/blueberry.component';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../../service/shared.service';

@Component({
  selector: 'seed-blueberry',
  standalone: true,
  imports: [ AnimationPotComponent, BlueberryComponent, CommonModule],
  templateUrl: './seed-blueberry.component.html',
  styleUrl: './seed-blueberry.component.scss'
})
export class SeedBlueberryComponent implements OnInit{

  public blueberrys: any = [];

  @Input() seedData: any;

  constructor(
    public shared: SharedService 
  ){}

  ngOnInit(): void {
    this.startBlueberry()
  }

  startBlueberry(){
    for (let index = 0; index < 5; index++) {
      
      this.blueberrys.push({
        lMax: this.shared.getRandomInt(0, 100)+'vw',
        mMax: this.shared.getRandomInt(0, 100)+'vh',
      })
      
    }
  }
}

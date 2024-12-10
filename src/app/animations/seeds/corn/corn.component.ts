import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimationPotComponent } from '../../animation-pot/animation-pot.component';
import { PopcornComponent } from './popcorn/popcorn.component';
import { SharedService } from '../../../service/shared.service';

@Component({
  selector: 'seed-corn',
  standalone: true,
  imports: [CommonModule, AnimationPotComponent, PopcornComponent],
  templateUrl: './corn.component.html',
  styleUrl: './corn.component.scss'
})
export class CornComponent {

  popcorns: any = [];

  constructor(
    public shared: SharedService
  ){

  }

  popcornStart(){
    for (let index = 0; index < 10; index++) {
      this.pushCorn();
    }

  }

  pushCorn(){
    this.popcorns.push(
      {
        mInitial: '80%',
        mMax: this.shared.getRandomInt(-40, 40) + '%',
        mMin: '100vh',

        lInitial: "50%",
        lMax: this.shared.getRandomInt(0, 100) + '%',
        lMin: '0%'
      }
    );
    setTimeout(() => {
      this.popcorns.shift()
    }, 3000);
  }
}

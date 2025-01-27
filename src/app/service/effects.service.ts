import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class EffectsService {

  constructor(
    public shared: SharedService
  ) { }

  // PALOMITAS
  public popcorns: any = [];
  getCorns(popNumber: number) {
    for (let index = 0; index < popNumber; index++) {
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
        this.popcorns.shift();
        return this.popcorns;
      }, 3000);
    }
    return this.popcorns;

  }

  // PIPAS
  public pipes: any = [];
  public getPipes(pipesNumber: number) {
    for (let index = 0; index < pipesNumber; index++) {
      this.pipes.push({
        mMax: this.shared.getRandomInt(-100, 100) + 'vh',
        lMax: this.shared.getRandomInt(-100, 100) + 'vw',
      })
      setTimeout(() => {
        this.pipes.shift();
        return this.pipes;
      }, 1000);
    }
    return this.pipes;

  }
}

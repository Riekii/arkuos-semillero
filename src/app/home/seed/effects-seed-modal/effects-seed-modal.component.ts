import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
import { PopcornComponent } from '../../../animations/seeds/corn/popcorn/popcorn.component';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../../service/shared.service';
import { PipeComponent } from '../../../animations/seeds/sunflower/pipe/pipe.component';

@Component({
  selector: 'app-effects-seed-modal',
  standalone: true,
  imports: [
    MatDialogClose, 

    PopcornComponent,
    PipeComponent,

    CommonModule
  ],
  templateUrl: './effects-seed-modal.component.html',
  styleUrl: './effects-seed-modal.component.scss'
})
export class EffectsSeedModalComponent {

  
  public dialog = inject(MatDialog);



  constructor(
    public shared: SharedService
  ) {
  }

  close() {
    this.dialog.closeAll();
  }

  // PALOMITAS
  public popcorns: any = [];
  popcornStart() {
    for (let index = 0; index < 10; index++) {
      this.pushCorn();
    }
  }
  pushCorn() {
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

  // PIPAS
  public pipes: any = [];
  public pipesStart() {
    for (let index = 0; index < 2; index++) {
      this.pipes.push({
        mMax: this.shared.getRandomInt(-100, 100) + 'vh',
        lMax: this.shared.getRandomInt(-100, 100) + 'vw',
      })
      setTimeout(() => {
        this.pipes.shift()
      }, 1000);
    }
    
  }
}

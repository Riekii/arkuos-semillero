import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
import { PopcornComponent } from '../../../animations/seeds/corn/popcorn/popcorn.component';
import { CommonModule } from '@angular/common';
import { PipeComponent } from '../../../animations/seeds/sunflower/pipe/pipe.component';
import { EffectsService } from '../../../service/effects.service';

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
    public efService: EffectsService
  ) {
  }

  close() {
    this.dialog.closeAll();
  }

  // PALOMITAS
  public popcorns: any = [];
  initPop(){
    this.popcorns = this.efService.getCorns(10);
  }

  public pipes: any = [];
  initPipes(){
    this.pipes = this.efService.getPipes(5);
  }

}

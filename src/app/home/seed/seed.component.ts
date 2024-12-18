import { Component, inject } from '@angular/core';
import { CornComponent } from '../../animations/seeds/corn/corn.component';
import { SunflowerComponent } from '../../animations/seeds/sunflower/sunflower.component';
import { AnimationPotComponent } from '../../animations/animation-pot/animation-pot.component';
import { SeedBlueberryComponent } from '../../animations/seeds/seed-blueberry/seed-blueberry.component';
import { SeedModalComponent } from './seed-modal/seed-modal.component';

import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'seed-container',
  standalone: true,
  imports: [CornComponent, SunflowerComponent, AnimationPotComponent, SeedBlueberryComponent, MatFormFieldModule],
  templateUrl: './seed.component.html',
  styleUrl: './seed.component.scss'
})

export class SeedComponent {

  public dialog = inject(MatDialog)

  openSeed(): void {
    const dialogRef = this.dialog.open(SeedModalComponent, {
      height: '400px',
      width: '600px',
      data:{}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    }); 
  }
}

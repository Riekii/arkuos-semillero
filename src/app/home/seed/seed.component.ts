import { Component, OnInit, inject } from '@angular/core';
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
import { FirebaseService } from '../../service/firebase.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'seed-container',
  standalone: true,
  imports: [CornComponent, CommonModule, SunflowerComponent, AnimationPotComponent, SeedBlueberryComponent, MatFormFieldModule],
  templateUrl: './seed.component.html',
  styleUrl: './seed.component.scss'
})

export class SeedComponent implements OnInit{

  public dialog = inject(MatDialog);

  fire = inject(FirebaseService);

  public seeds!: any[];

  ngOnInit(): void {
    this.getSeeds();
  }

  getSeeds() {
    this.fire.getSeeds().subscribe((resp: any) => {
      this.seeds = resp;
    })
  }

  sendSeed(){
    let semilla = {
      nombre: 'pepito',
      foto: 'https://blog.agroptima.com/wp-content/uploads/2015/11/semilla-certificada-o-no.jpg',
      descripcion: 'Un popito es un animal salvaje muy peligroso'
    }
    this.fire.addSemilla(semilla);
  }

  delSeed(seedId: string){
    this.fire.delSeed(seedId)
  }

  openSeed(): void {
    const dialogRef = this.dialog.open(SeedModalComponent, {
      height: '450px',
      width: '400px',
      panelClass: 'seed-modal',
      data:{}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    }); 
  }
}

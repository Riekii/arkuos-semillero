import { Component, OnInit, inject } from '@angular/core';
import { CornComponent } from '../../animations/seeds/corn/corn.component';
import { SunflowerComponent } from '../../animations/seeds/sunflower/sunflower.component';
import { SeedBlueberryComponent } from '../../animations/seeds/seed-blueberry/seed-blueberry.component';
import { NewSeedModalComponent } from './new-seed-modal/new-seed-modal.component';

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
import { SeedGenericComponent } from '../../animations/seeds/generic/generic.component';
import { LoadingComponent } from '../../shared/loading/loading.component';


@Component({
  selector: 'seed-container',
  standalone: true,
  imports: [
    CommonModule, 
    MatFormFieldModule, 
    LoadingComponent,
    SeedGenericComponent
  ],
  templateUrl: './seed.component.html',
  styleUrl: './seed.component.scss'
})

export class SeedComponent implements OnInit {

  public dialog = inject(MatDialog);
  public loading: boolean = true;

  fire = inject(FirebaseService);

  public seeds!: any[];

  ngOnInit(): void {
    this.getSeeds();
  }

  getSeeds() {
    this.loading = true;
    this.fire.getSeeds().subscribe((resp: any) => {
      this.seeds = resp;
      this.loading = false;
    })
  }
  

  delSeed(seedId: string) {
    this.fire.delSeed(seedId)
  }

  openSeed(): void {
    const dialogRef = this.dialog.open(NewSeedModalComponent, {
      height: '450px',
      width: '400px',
      panelClass: 'seed-modal',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

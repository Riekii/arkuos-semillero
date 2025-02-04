import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailSeedModalComponent } from '../../home/seed/detail-seed-modal/detail-seed-modal.component';

@Component({
  selector: 'pot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animation-pot.component.html',
  styleUrl: './animation-pot.component.scss'
})
export class AnimationPotComponent implements OnInit{

  @Input() seedData: any;
  
  public dialog = inject(MatDialog);

  ngOnInit(): void {
    if(this.seedData && !this.seedData.author){
      this.seedData.author = 'random';
    }
  }

  openDetailSeed(){
    const dialogRef = this.dialog.open(DetailSeedModalComponent, {
      height: '450px',
      width: '400px',
      panelClass: 'seed-modal-detail',
      data: {
        seed: this.seedData
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    }); 
  }
}

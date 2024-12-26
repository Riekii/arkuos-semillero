import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { seedImports } from '../../../shared/seedsImports';
import { CornComponent } from '../../../animations/seeds/corn/corn.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from '../../../../environments/environment';
import { StorageService } from '../../../service/storage.service';

@Component({
  selector: 'app-detail-seed-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-seed-modal.component.html',
  styleUrl: './detail-seed-modal.component.scss'
})
export class DetailSeedModalComponent implements OnInit{

  public seed: any;
  public imageLink!: string;
  // private seedsComponents = @Inject(...)
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public store: StorageService
  ) { }

  ngOnInit(): void {
    this.seed = this.data.seed;
    this.imageLink = environment.storageRef + 'images%2F'+this.data.seed.id + '?alt=media';  
    this.getModel()
  }

  getModel(){
    this.store.getStoreSeedModel(this.seed.id);
  }
}

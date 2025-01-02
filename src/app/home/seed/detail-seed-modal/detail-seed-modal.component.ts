import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { seedImports } from '../../../shared/seedsImports';
import { CornComponent } from '../../../animations/seeds/corn/corn.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from '../../../../environments/environment';
import { StorageService } from '../../../service/storage.service';
import { ModelViewerComponent } from '../../../shared/model-viewer/model-viewer.component';

@Component({
  selector: 'app-detail-seed-modal',
  standalone: true,
  imports: [CommonModule, ModelViewerComponent],
  templateUrl: './detail-seed-modal.component.html',
  styleUrl: './detail-seed-modal.component.scss'
})
export class DetailSeedModalComponent implements OnInit{

  public seed: any;
  public imageLink!: string;
  public model: any; 
  // private seedsComponents = @Inject(...)
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public store: StorageService
  ) { }

  ngOnInit(): void {
    this.seed = this.data.seed;
    this.imageLink = environment.storageRef + 'images%2F'+this.data.seed.id + '?alt=media';  
    console.log(this.seed)
    if(this.seed.model)this.getModel()
  }

  getModel(){
    this.store.getStoreSeedModel(this.seed.id).then((url) => {
      this.model = url;
    })
      .catch((error) => {
        console.error(error)
        // Handle any errors
      });
  }
}

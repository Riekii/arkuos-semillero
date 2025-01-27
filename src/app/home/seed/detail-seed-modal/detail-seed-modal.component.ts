import { Component, inject, Inject, Injector, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { environment } from '../../../../environments/environment';
import { StorageService } from '../../../service/storage.service';
import { ModelViewerComponent } from '../../../shared/model-viewer/model-viewer.component';
import { AnimationPotComponent } from '../../../animations/animation-pot/animation-pot.component';
import { FirebaseService } from '../../../service/firebase.service';
import { NewSeedModalComponent } from '../new-seed-modal/new-seed-modal.component';

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
  public dialog = inject(MatDialog);
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public store: StorageService,
    private fire: FirebaseService
  ) { }

  ngOnInit(): void {
    this.seed = this.data.seed;
    this.imageLink = environment.storageRef + 'images%2F'+this.data.seed.id + '?alt=media';
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

  delSeed() {
    this.fire.delSeed(this.seed.id);
    this.store.delStoreSeedImage(this.seed.id);
    this.store.delStoreSeedModel(this.seed.id);
    this.dialog.closeAll();
  }

  editSeed(){
    this.dialog.open(NewSeedModalComponent, {
      panelClass: 'seed-modal',
      data: {
        seed: this.seed,
        edit: true
      }
    })
  }

  close(){
    this.dialog.closeAll()
  }
}

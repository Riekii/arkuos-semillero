import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from '../../../service/firebase.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, timeout } from 'rxjs';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { DropzoneComponent } from '../../../shared/dropzone/dropzone.component';
import { StorageService } from '../../../service/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { EffectsSeedModalComponent } from '../effects-seed-modal/effects-seed-modal.component';

@Component({
  selector: 'app-new-seed-modal',
  standalone: true,
  imports: [AsyncPipe, CommonModule,
    MatRadioModule,
    DropzoneComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,
    MatIconModule],
  templateUrl: './new-seed-modal.component.html',
  styleUrl: './new-seed-modal.component.scss'
})
export class SeedModalComponent implements OnInit {

  fire = inject(FirebaseService);
  public dialog = inject(MatDialog);
  
  public imgType!: string;
  public blob!: Blob;
  public stl!: File;

  constructor(
    public store: StorageService
  ){
  }

  public seeds!: any[];
  public seedOptions = [
    {type: 'corn', name:'Mazorca'},
    {type: 'sunflower', name:'Girasol'},
    {type: 'blue', name:'Arándano'},
  ];

  public typeSeed!: string;
  public form: FormGroup = new FormGroup({
    name: new FormControl("", Validators.minLength(2)),
    description: new FormControl(""),
    photo: new FormControl(""),
    model: new FormControl(""),
    type: new FormControl("") 
  });

  ngOnInit(): void {
    this.getSeeds();
  }

  createForm(){
  }

  getSeeds() {
    this.fire.getSeeds().subscribe((resp: any) => {
      this.seeds = resp;
    })
  }

  sendSeed(){
    if(this.stl) this.form.get('model')?.setValue(1);
    else this.form.get('model')?.setValue(0);
    this.fire.addSemilla(this.form.value).then((resp: any) => {
      let id = resp._key.path.segments[1];
      this.dialog.closeAll();
      // SI TIENE IMAGEN
      if(this.form.get('photo')?.value != ""){
        this.store.addStoreSeedImage(
          {
            id: id,
            blob: this.blob
          }
        )
      }
      // SI TIENE MODELO
      if(this.stl){
        this.store.addStoreSeedModel(
          {
            id: id,
            file: this.stl
          }
        )
      }
    })
  }

  delSeed(seedId: string){
    this.fire.delSeed(seedId)
  }

  setImage(event: any, type?: number){
    if(!type){
      this.form?.get('photo')?.setValue(event.b64);
      this.imgType = event.type;
      this.blob = event.blob;
    }
    // SI ES UN ARCHIVO 3D
    else if(type === 1){
      this.stl = event.file;
    }
  }

  openEffects(): void {
    const dialogRef = this.dialog.open(EffectsSeedModalComponent, {
      height: '450px',
      width: '400px',
      panelClass: 'seed-modal',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

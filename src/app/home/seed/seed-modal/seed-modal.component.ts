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

@Component({
  selector: 'app-seed-modal',
  standalone: true,
  imports: [AsyncPipe, CommonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatIconModule],
  templateUrl: './seed-modal.component.html',
  styleUrl: './seed-modal.component.scss'
})
export class SeedModalComponent implements OnInit {

  fire = inject(FirebaseService);

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
    this.fire.addSemilla(this.form.value);
  }

  delSeed(seedId: string){
    this.fire.delSeed(seedId)
  }
}

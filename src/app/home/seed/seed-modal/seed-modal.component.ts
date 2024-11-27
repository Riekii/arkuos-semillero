import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from '../../../service/firebase.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, timeout } from 'rxjs';

@Component({
  selector: 'app-seed-modal',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './seed-modal.component.html',
  styleUrl: './seed-modal.component.scss'
})
export class SeedModalComponent implements OnInit {

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

}

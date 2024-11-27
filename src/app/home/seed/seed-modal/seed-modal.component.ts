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
      this.prueba();

    })
  }


  prueba() {
    for (
      let index = 0;
      index < this.seeds.length;
      index++) {
      console.warn('SEMILLAS', index)
      const element = this.seeds[index];
    }

    if (this.seeds.length === 4) {
      console.log('HAY 4 SEMILLAS')
    } else {
      console.log('JAJA')
    }

    switch (this.seeds.length) {
      case 1:
        // solo hay 1
        break;
      case 2:

        break;
      case 3:

        break;
      case 4:

        break;

      default:
        console.warn('hay demasiadas')
        break;
    }

    setTimeout(() => {
      console.error('BOOOM')
    }, 6000);
  }
}

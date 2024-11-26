import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from '../../../service/firebase.service';

@Component({
  selector: 'app-seed-modal',
  standalone: true,
  imports: [],
  templateUrl: './seed-modal.component.html',
  styleUrl: './seed-modal.component.scss'
})
export class SeedModalComponent implements OnInit{

  fire = inject(FirebaseService);

  public seeds$: any;

  ngOnInit(): void {
    this.getSeeds();
  }

  getSeeds(){
    this.fire.getSeeds().subscribe((resp: any) => {
      console.log(resp)
    })
  }
}

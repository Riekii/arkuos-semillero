import { Component, inject, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { AnimationPotComponent } from '../../animations/animation-pot/animation-pot.component';
import { CornComponent } from '../../animations/seeds/corn/corn.component';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [AnimationPotComponent, CornComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent implements OnInit{

  ngOnInit(): void {
  }
}

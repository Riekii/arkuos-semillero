import { Component } from '@angular/core';
import { AnimationLeafsComponent } from '../../animations/animation-leafs/animation-leafs.component';

@Component({
  selector: 'loading',
  standalone: true,
  imports: [
    AnimationLeafsComponent
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

}

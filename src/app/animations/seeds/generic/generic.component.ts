import { Component, Input, OnInit } from '@angular/core';
import { AnimationPotComponent } from '../../animation-pot/animation-pot.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'seed-generic',
  standalone: true,
  imports: [AnimationPotComponent],
  templateUrl: './generic.component.html',
  styleUrl: './generic.component.scss'
})
export class GenericComponent implements OnInit{
  @Input() seedData: any;

  public imageLink!: string;

  ngOnInit(): void {
    this.imageLink = environment.storageRef + 'images%2F'+this.seedData.id + '?alt=media';  
    
  }
}

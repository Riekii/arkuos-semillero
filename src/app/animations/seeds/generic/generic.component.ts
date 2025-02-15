import { Component, Input, OnInit } from '@angular/core';
import { AnimationPotComponent } from '../../animation-pot/animation-pot.component';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { CornComponent } from '../corn/corn.component';

@Component({
  selector: 'seed-generic',
  standalone: true,
  imports: [AnimationPotComponent, CommonModule, NgOptimizedImage, CornComponent],
  templateUrl: './generic.component.html',
  styleUrl: './generic.component.scss'
})
export class SeedGenericComponent implements OnInit{
  @Input() seedData: any;

  public imageLink!: string;
  public imageShow: boolean = true;
  public imageLoaded: boolean = false;

  ngOnInit(): void {
    this.imageLink = environment.storageRef + 'images%2F'+this.seedData.id + '?alt=media';  
  }

  onImageLoad(){
    this.imageLoaded = true;
  }

  onImageError(){
    if(this.imageLink){
      this.imageShow = false;
      setTimeout(() => {
        this.imageShow = true
      }, 300);

    }
    

  }
}

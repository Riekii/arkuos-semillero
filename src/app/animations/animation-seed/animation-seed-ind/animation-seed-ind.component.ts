import { Component, Input, OnInit } from '@angular/core';
import { AnimationLeafsComponent } from '../../animation-leafs/animation-leafs.component';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../../service/shared.service';

@Component({
  selector: 'app-animation-seed-ind',
  standalone: true,
  imports: [AnimationLeafsComponent, CommonModule],
  templateUrl: './animation-seed-ind.component.html',
  styleUrl: './animation-seed-ind.component.scss'
})
export class AnimationSeedIndComponent implements OnInit {
  public minHeight: number = 300;
  public maxHeight: number = 800;

  public height: string = '0px';
  public width: string = '0px';
  public border: string = '';

  @Input() type: string = 'leaf';
  @Input() index: number = 0;
  
  public leafs: any = [1,1,1,1];

  constructor(
    public shared: SharedService
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      // PONEMOS LAS HOJAS POR DEFECTO
      this.getStandardLeafs()
      if (this.index >= 2 && this.index < 6) {
        this.height = this.shared.getRandomInt(this.minHeight * 3, this.maxHeight *3) + 'px';
        // ESTAS HOJAS VAN A TAPAR EL LOGO DE ARKUOS
        this.leafs = [...this.leafs, ...this.leafs, ...this.leafs]
        setTimeout(() => {
          this.height = this.shared.getRandomInt(this.minHeight/2, this.maxHeight/2) + 'px';
        }, 1000);
      }

      
    }, 400);
  }



  getStandardLeafs(){
    if(this.type === 'leaf'){
      this.height = this.shared.getRandomInt(this.minHeight, this.maxHeight) + 'px';
      this.border = "solid 12px";
    }
    else if(this.type === 'leafback'){
      this.height = this.shared.getRandomInt(this.minHeight/2, this.maxHeight/1.5) + 'px';
      this.border = "solid 12px"
    }
  }

}

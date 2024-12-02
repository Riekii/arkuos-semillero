import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-leafs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animation-leafs.component.html',
  styleUrl: './animation-leafs.component.scss'
})
export class AnimationLeafsComponent implements OnInit {

  @Input() even: boolean = false;


  public height: string = '0px';
  public width: string = '0px';
  public border: string = '';
  public borderRad: string = '';

  ngOnInit(): void {
    setTimeout(() => {
      this.height = '150px';
      this.width = '150px';
    }, 1500);
  }

}

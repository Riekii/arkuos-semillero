import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'leafs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animation-leafs.component.html',
  styleUrl: './animation-leafs.component.scss'
})
export class AnimationLeafsComponent implements OnInit {

  @Input() even: boolean = false;
  @Input() type!: string;
  @Input() loading: boolean = false;

  public height: string = '0px';
  public width: string = '0px';
  public border: string = '';
  public borderRad: string = '';

  ngOnInit(): void {
    let timeout = 0;
    if(!this.loading){ timeout = 400;}
    setTimeout(() => {
      this.height = '150px';
      this.width = '150px';
    }, timeout);
  }

}

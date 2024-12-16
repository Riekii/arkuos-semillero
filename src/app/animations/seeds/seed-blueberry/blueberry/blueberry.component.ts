import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blueberry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blueberry.component.html',
  styleUrl: './blueberry.component.scss'
})
export class BlueberryComponent implements OnInit{

  @Input() blueberry: any;
  @Input() index!: number;

  public exploded: boolean = false;
  public style: string = '';

  ngOnInit(): void {
    let mMax = '--mMax: ' + this.blueberry.mMax + '; ';
    let lMax = '--lMax: ' + this.blueberry.lMax + '; ';
    this.style = mMax + lMax;
  }
  
  explode(){
    this.exploded = true;
    setTimeout(() => {
      this.exploded = false;
    }, 1000);
  }
}

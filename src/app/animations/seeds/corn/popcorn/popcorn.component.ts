import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'popcorn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popcorn.component.html',
  styleUrl: './popcorn.component.scss'
})
export class PopcornComponent implements OnInit{
  @Input() popCorn!: any;

  public style: string = "";

  ngOnInit(): void {

    let mInitial = '--mInitial: ' + this.popCorn.mInitial + '; ';
    let mMax = '--mMax: ' + this.popCorn.mMax + '; ';
    let mMin = '--mMin: ' + this.popCorn.mMin + '; ';
    let lInitial = '--lInitial: ' + this.popCorn.lInitial + '; ';
    let lMax = '--lMax: ' + this.popCorn.lMax + '; ';
    let lMin = '--lMin: ' + this.popCorn.lMin + ';';

    this.style = mInitial + mMax + mMin + lInitial + lMax + lMin;

  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sun-pipe',
  standalone: true,
  imports: [],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent implements OnInit{

  @Input() pipe!: any;

  public style!: string;

  
  ngOnInit(): void {
    let mMax = '--mMax: ' + this.pipe.mMax + '; ';
    let lMax = '--lMax: ' + this.pipe.lMax + '; ';

    this.style = mMax + lMax;
  }
}

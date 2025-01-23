import { Component, inject, OnInit } from '@angular/core';
import { CornComponent } from '../../animations/seeds/corn/corn.component';
import { SeedComponent } from '../seed/seed.component';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CornComponent, SeedComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent implements OnInit{

  ngOnInit(): void {
  }
}
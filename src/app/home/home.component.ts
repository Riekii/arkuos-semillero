import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DescriptionComponent } from './description/description.component';
import { AboutComponent } from './about/about.component';
import { SeedModalComponent } from './seed/seed-modal/seed-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, DescriptionComponent, AboutComponent, SeedModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

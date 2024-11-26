import { Component } from '@angular/core';
import { SeedModalComponent } from '../seed/seed-modal/seed-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SeedModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

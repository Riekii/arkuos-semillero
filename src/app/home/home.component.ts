import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DescriptionComponent } from './description/description.component';
import { AboutComponent } from './about/about.component';
import { ModelViewerComponent } from '../shared/model-viewer/model-viewer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, DescriptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

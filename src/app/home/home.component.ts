import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DescriptionComponent } from './description/description.component';
import { AboutComponent } from './about/about.component';
import { ModelViewerComponent } from '../shared/model-viewer/model-viewer.component';
import { FireauthService } from '../service/fireauth.service';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, DescriptionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

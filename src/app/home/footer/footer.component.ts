import { Component, inject } from '@angular/core';
import { FireauthService } from '../../service/fireauth.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  public auth = inject(FireauthService);

  loginGoogle(){
    this.auth.loginGoogle();
  }

}

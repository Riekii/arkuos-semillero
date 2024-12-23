import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'sun',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animation-sun.component.html',
  styleUrl: './animation-sun.component.scss'
})


export class AnimationSunComponent {

  public sunActive: boolean = true;

  private lastScrollTop = 0;
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop < this.lastScrollTop) {
    console.log('Scroll hacia a´rriba');
  } else if (currentScrollTop > this.lastScrollTop) {
    console.log('Scroll hacia abajo');
  }
  
  if(currentScrollTop < 400) this.sunActive = true;
  else this.sunActive = false;

  this.lastScrollTop = currentScrollTop;


  
}
}

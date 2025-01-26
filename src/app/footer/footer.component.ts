import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  gitIsHovered: boolean = false;
  emailIsHovered: boolean = false;
  giticon: HTMLElement | null = null;
  emailicon: HTMLElement | null = null;

  constructor() { 
    console.log('git hovered status:', this.gitIsHovered);
    console.log('email hovered status:', this.gitIsHovered);
  }
  
  ngOnInit() {
    this.giticon = document.getElementById('giticon');
    this.emailicon = document.getElementById('emailicon');

    if (this.giticon) {
      this.giticon.addEventListener('mouseover', () => {
        this.gitIsHovered = true;
        console.log('Git hover status:', this.gitIsHovered);
      });

      this.giticon.addEventListener('mouseleave', () => {
        this.gitIsHovered = false;
        console.log('Git hover status:', this.gitIsHovered);
      });
    }

    if (this.emailicon) {
      this.emailicon.addEventListener('mouseover', () => {
        this.emailIsHovered = true;
        console.log('Email hover status:', this.emailIsHovered);
      });

      this.emailicon.addEventListener('mouseleave', () => {
        this.emailIsHovered = false;
        console.log('Email hover status:', this.emailIsHovered);
      });
    }
  }
}

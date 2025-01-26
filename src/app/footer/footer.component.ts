import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {

  gitIsHovered: boolean = false;
  emailIsHovered: boolean = false;

  constructor() { 
    console.log('git hovered status:', this.gitIsHovered);
    console.log('email hovered status:', this.gitIsHovered);
  }
  
  ngOnInit() {
  }

  onMouseOver(id: string,event: Event) {
    console.log('event type:', event);
    
    if (id && id=='giticon'){
      this.gitIsHovered = true;
      console.log('git hovered status:', this.gitIsHovered);
    }
    if (id && id=='emailicon'){
      this.emailIsHovered = true;
      console.log('email hovered status:', this.emailIsHovered);
    }
  }

  onMouseLeave(id:string, event: Event) {
    console.log('event type:', event);

    if(id && id=='giticon'){
      this.gitIsHovered = false;
      console.log('git hovered status:', this.gitIsHovered);
    }
    if(id && id=='emailicon'){
      this.emailIsHovered = false;
      console.log('email hovered status:', this.emailIsHovered);
    }
  }
}

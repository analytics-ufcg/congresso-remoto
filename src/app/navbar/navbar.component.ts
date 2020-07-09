import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public clicked = false;

  navbarOpen = false;
  element: any;

  constructor() { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onClick(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicked = true;
  }

}

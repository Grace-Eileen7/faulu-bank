import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  isMenuOpen = false;
  isPopupOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }
}


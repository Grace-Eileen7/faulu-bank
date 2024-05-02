import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  showNotification: boolean = false;

  constructor(private router: Router) {}

  validateLoginForm() {
    const username = (<HTMLInputElement>document.getElementById('username')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;

    if (username.trim() === '' || password.trim() === '') {
      // If any field is empty, show notification
      this.showNotification = true;
    } else {
      // If form is valid, navigate to layout component
      this.router.navigate(['/dashboard']);
    }
  }

  hideNotification() {
    this.showNotification = false;
  }
}

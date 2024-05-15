import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showNotification: boolean = false;

  constructor(private router: Router) {}

  validateLoginForm() {
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      // If email is invalid, show notification
      this.showNotification = true;
      return false;
    }

    // Navigate to dashboard if email is valid
    this.router.navigate(['/dashboard']);
    return true;
  }
}

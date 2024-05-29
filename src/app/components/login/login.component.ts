import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showNotification: boolean = false;
  notificationMessage: string = '';

  constructor(private router: Router,) {}

  validateLoginForm() {
    const username = (<HTMLInputElement>document.getElementById('username')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;

    if (username.trim() === '' || password.trim() === '') {
      // If any field is empty, show notification
      this.showNotification = true;
    } else {
      // If form is valid, navigate to layout component
      this.router.navigate(['/Registration']);
    }
  }

  hideNotification() {
    this.showNotification = false;
  }

  navigateToTermsAndconditions() {
    this.router.navigate(['/TermsAndconditions']);
  }

  navigateToRegistration() {
    this.router.navigate(['/Registration']);
  }
}

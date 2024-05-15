import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(private router: Router) {}

  // Function to navigate to dashboard component
  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  // Function to handle accept button click
  accept() {
    // You can perform any necessary logic here before navigating
    this.navigateToDashboard();
  }

  // Function to handle cancel button click
  cancel() {
    // Navigate to a different page or perform any other action
  }
}

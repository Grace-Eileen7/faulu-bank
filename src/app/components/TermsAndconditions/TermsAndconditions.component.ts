import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './termsandconditions.component.html',
  styleUrls: ['./termsandconditions.component.css']
})
export class TermsAndConditionsComponent {
  isChecked: boolean = false; // Add a variable to track if the checkbox is checked

  constructor(private router: Router) {}

  validateCheckbox() {
    if (this.isChecked) {
      // If checkbox is checked, navigate to dashboard
      this.router.navigate(['/registration']);
    } else {
      // If checkbox is not checked, do nothing or show a message
    }
  }

  // Function to toggle the value of isChecked when checkbox state changes
  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
}


import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NavigationExtras, Router, RouterOutlet } from '@angular/router';
import { data } from '../../../data/dummy-data';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  showError: boolean = false;

  constructor(private router: Router) {}

  email = new FormControl('', {
    validators: [Validators.required, Validators.email],
    updateOn: 'blur',
  });
  phone = new FormControl('', {
    validators: [Validators.required, Validators.minLength(10)],
    updateOn: 'blur',
  });

  loginOrSignupForm = new FormGroup({
    email: this.email,
    phone: this.phone,
  });

  // Function to navigate to login or signup based on user details
  nextStep() {
    // Check if email or phone is invalid
    if (this.email.invalid && this.phone.invalid) {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000);
      return;
    }
    const formValue = this.loginOrSignupForm.value;
    const navigationExtras: NavigationExtras = {
      state: {
        email: formValue.email,
        phone: formValue.phone,
      },
    };

    // Check if user exists based on email or phone
    if (
      data.find((user) => user.email === formValue.email) ||
      data.find((user) => user.phone === String(formValue.phone))
    ) {
      this.router.navigate(['/login'], navigationExtras);
    } else {
      this.router.navigate(['/signup'], navigationExtras);
    }
  }
}

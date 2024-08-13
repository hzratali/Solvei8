import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { data } from '../../../data/dummy-data';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  userEmail: string;
  userPhone: string;
  userDetails: any;
  showError: boolean = false;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { email: string; phone: string };
    this.userEmail = state?.email;
    this.userPhone = state?.phone;
  }

  ngOnInit() {
    // Use the email and phone values as needed
    this.userDetails = this.getUserDetails(); // Retrieve user details based on email or phone

    // Set the initial value of the email form control if userDetails is present
    if (this.userDetails) {
      this.email.setValue(this.userDetails.email);
      this.phone.setValue(this.userDetails.phone);
    }
  }
  userLogin: boolean = false;

  // ------------- login form ----------------

  email = new FormControl(
    { value: '', disabled: true },
    {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
    }
  );
  phone = new FormControl(
    { value: '', disabled: true },
    {
      validators: [Validators.required, Validators.minLength(10)],
      updateOn: 'blur',
    }
  );

  password = new FormControl('', {
    validators: [Validators.required, Validators.minLength(6)],
    updateOn: 'blur',
  });

  loginOrSignupForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  // Function to navigate to login or signup based on user details
  login() {
    // Check if password is invalid
    if (this.userDetails.password !== this.password.value) {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000);
      return;
    }
    this.userLogin = true;
    // this.router.navigate(['/main']);
  }

  // Function to retrieve user details based on email or phone
  getUserDetails() {
    const phone = this.userPhone;
    return data.find(
      (user) => user.email === this.userEmail || user.phone === String(phone)
    );
  }
}

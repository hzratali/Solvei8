import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NavigationExtras, Router, RouterOutlet } from '@angular/router';
import {
  designations,
  allowedOrganizations,
  data,
} from '../../../data/dummy-data';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  signupstep1: boolean = true;
  signupstep2: boolean = false;
  signupUser: boolean = false;
  designations = designations;

  userEmail: string;
  userPhone: string;
  userDetails: any;
  orgNotFound: boolean = false;
  showError: boolean = false;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { email: string; phone: string };
    this.userEmail = state?.email;
    this.userPhone = state?.phone;
  }

  ngOnInit() {
    // Use the email and phone values as needed
    this.email.setValue(this.userEmail);
    this.phone.setValue(this.userPhone);
  }

  // ------------- signup step 1 form ----------------

  name = new FormControl('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });

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

  signupFormStep1 = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
    phone: this.phone,
  });

  // ------------- signup step 2 form ----------------

  orgName = new FormControl('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });

  orgId = new FormControl(
    { value: '', disabled: true },
    {
      validators: [Validators.required],
      updateOn: 'blur',
    }
  );

  designation = new FormControl(designations[0].id, {
    validators: [Validators.required],
    updateOn: 'blur',
  });

  birthDate = new FormControl('', {
    validators: [Validators.required],
    updateOn: 'blur',
  });

  city = new FormControl('', {
    updateOn: 'blur',
  });

  pincode = new FormControl('', {
    updateOn: 'blur',
  });

  signupFormStep2 = new FormGroup({
    orgName: this.orgName,
    orgId: this.orgId,
    designation: this.designation,
    birthDate: this.birthDate,
    city: this.city,
    pincode: this.pincode,
  });

  // signup step 1

  signupStep1() {
    // Check if email or phone is invalid
    if (this.signupFormStep1.invalid) {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000);
      return;
    }

    this.signupstep2 = true;
    this.signupstep1 = false;

    const data = [];

    // store user details
    data.push({
      name: this.signupFormStep1.value.name ?? '',
      email: this.email.value ?? '',
      password: this.signupFormStep1.value.password ?? '',
      phone: this.phone.value ?? '',
    });
    this.userDetails = data;
  }

  // signup step 2
  signupStep2() {
    // Check if organization name is invalid
    if (this.signupFormStep2.invalid || this.orgNotFound) {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000);
      return;
    }
    this.signupstep2 = false;
    this.signupUser = true;

    // store user details
    data.push({
      name: this.signupFormStep1.value.name ?? '',
      email: this.userEmail ?? '',
      password: this.signupFormStep1.value.password ?? '',
      phone: this.userPhone ?? '',
      organizationName: this.signupFormStep2.value.orgName ?? '',
      organizationId: this.orgId.value ?? '',
      designation: this.signupFormStep2.value.designation ?? '',
      birthDate: this.signupFormStep2.value.birthDate
        ? new Date(this.signupFormStep2.value.birthDate)
        : null,
      city: this.signupFormStep2.value.city ?? '',
      pincode: this.signupFormStep2.value.pincode ?? '',
    });

    const navigationExtras: NavigationExtras = {
      state: {
        email: this.email.value,
        phone: this.phone.value,
      },
    };

    setTimeout(() => {
      this.router.navigate(['/login'], navigationExtras);
    }, 3000);
  }

  // go back to signup step 1

  back() {
    this.signupstep1 = true;
    this.signupstep2 = false;
  }

  // check organization name
  checkOrgName(event: any) {
    const orgData = allowedOrganizations.find(
      (org) => org.orgName === event.target.value
    );

    // reset organization id
    if (orgData === undefined) {
      this.orgNotFound = true;
      this.orgId.setValue('');
    }

    // set organization id
    if (orgData) {
      this.orgNotFound = false;
      this.orgId.setValue(orgData.orgId);
    } else {
      this.orgId.setErrors({ unknownOrganization: true });
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NURSE_USERS } from '../local-data/nurse-users';
import { NursesService } from '../services/nursesService/nurses.service';
import { Nurse } from '../model/Nurse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  firstSurname: string = '';
  secondSurname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private nursesService: NursesService, private router: Router) {}

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';
    let newId = NURSE_USERS.length;
    const nurseData: Nurse = {
      id: newId + 1,
      name: this.name,
      first_surname: this.firstSurname,
      second_surname: this.secondSurname,
      email: this.email,
      password: this.password,
      profile_pic: 'https://avatar.iran.liara.run/public',
    };
    let isRegistered = this.nursesService.registerNurse(nurseData);
    if (isRegistered) {
      this.successMessage = 'Registered successfully!';
      setTimeout(() => {
        this.router.navigate(['/nurses-login']);
      }, 2500);
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}

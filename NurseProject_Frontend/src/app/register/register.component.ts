import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NursesService } from '../services/nursesService/nurses.service';
import { Router } from '@angular/router';
import { Nurse } from '../model/Nurse';

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

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    const nurseData: Nurse = {
      id: 0,  
      name: this.name,
      first_surname: this.firstSurname,
      second_surname: this.secondSurname,
      email: this.email,
      password: this.password,
      profile_pic: 'https://avatar.iran.liara.run/public', 
    };

    this.nursesService.registerNurse(nurseData).subscribe(
      (response: any) => {
        if (response.success) {
          this.successMessage = 'Registered successfully!';
          setTimeout(() => {
            this.router.navigate(['/nurses-login']);
          }, 2500);
        }
      },
      (error) => {
        this.errorMessage = error.error?.error || 'An error occurred. Please try again.';
      }
    );
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NURSE_USERS } from '../local-data/nurse-users';
import { NursesService } from '../services/nurses.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
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
  
  constructor(private nursesService: NursesService) {}

  onSubmit(): void {
    const nurseData = {
      id: NURSE_USERS.length++,
      name: this.name,
      first_surname: this.firstSurname,
      second_surname: this.secondSurname,
      email: this.email,
      password: this.password,
      profile_pic: "https://avatar.iran.liara.run/public"
    };
    this.nursesService.registerNurse(nurseData);
  }
}

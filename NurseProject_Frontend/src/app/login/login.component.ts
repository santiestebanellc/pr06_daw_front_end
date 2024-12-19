import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NursesService } from '../services/nurses.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule , CommonModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private nursesService: NursesService) {}

  onSubmit() {
    const isValid = this.nursesService.validateLogin(this.email, this.password);
    if (isValid) {
      this.errorMessage = '';
      alert('Login successful!');
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}

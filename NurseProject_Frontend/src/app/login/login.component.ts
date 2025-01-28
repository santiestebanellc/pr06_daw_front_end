import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NursesService } from '../services/nursesService/nurses.service';
import { CommonModule } from '@angular/common';
import { IsLoggedService } from '../services/isLogged/is-logged.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private nursesService: NursesService,
    private isLoggedService: IsLoggedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.isLoggedService.isAuthenticated()) {
      this.router.navigate(['/list-all-nurses']);
    }
  }

  login(): void {
    this.isLoggedService.login();
    this.router.navigate(['/list-all-nurses']);
  }

  onSubmit() {
    const isValid = this.nursesService.validateLogin(this.email, this.password);
    if (isValid) {
      this.errorMessage = '';
      this.login();
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}

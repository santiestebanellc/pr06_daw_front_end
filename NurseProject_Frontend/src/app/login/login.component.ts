import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Corregido: styleUrls en plural.
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  users = [
    { email: 'nurse@example.com', password: '12345' },
    { email: 'admin@example.com', password: 'adminpass' },
  ];

  onSubmit() {
    const user = this.users.find(
      (u) => u.email === this.email && u.password === this.password
    );
    if (user) {
      this.errorMessage = '';
      alert('Login successful!');
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}

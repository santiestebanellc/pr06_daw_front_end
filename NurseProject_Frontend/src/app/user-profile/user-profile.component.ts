import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IsLoggedService } from '../services/isLogged/is-logged.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userForm: FormGroup;
  selectedUser: any;

  constructor(private isLoggedService: IsLoggedService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      firstSurname: [''],
      secondSurname: [''],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      image: [''],
    });
  }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    this.selectedUser = this.isLoggedService.getUserData();
    this.userForm.patchValue(this.selectedUser); 
  }

  updateUser(): void {
    if (this.userForm.valid) {
      console.log('Usuario actualizado:', this.userForm.value);
      alert('Usuario actualizado correctamente');
    }
  }
}

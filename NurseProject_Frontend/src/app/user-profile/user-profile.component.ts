import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NursesService } from '../services/nursesService/nurses.service';
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
  users: any[] = [];
  selectedUser: any = null;

  constructor(private nurseService: NursesService, private fb: FormBuilder) {
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
    this.loadUsers();
  }

  loadUsers(): void {
    this.nurseService.getNurses().subscribe(
      (data: any[]) => {
        this.users = data;
      },
      (error: any) => {
        console.error('Error al cargar usuarios:', error);
        alert('No se pudieron cargar los usuarios');
      }
    );
  }

  selectUser(user: any): void {
    this.selectedUser = { ...user };
    this.userForm.patchValue({
      name: this.selectedUser.name,
      firstSurname: this.selectedUser.firstSurname,
      secondSurname: this.selectedUser.secondSurname,
      email: this.selectedUser.email,
      password: this.selectedUser.password,
      image: this.selectedUser.image,
    });
  }

  updateUser(): void {
    if (this.userForm.valid) {
      const updatedUser = this.userForm.value;

      if (updatedUser.image && updatedUser.image.startsWith('data:image')) {
        updatedUser.image = updatedUser.image.split(',')[1];
      }

      this.nurseService.updateNurse(updatedUser).subscribe(
        (response: any) => {
          console.log('Usuario actualizado con éxito', response);
          alert('Usuario actualizado correctamente');
          this.selectedUser = null;
          this.loadUsers();
        },
        (error: any) => {
          console.error('Error al actualizar el usuario', error);
          alert('No se pudo actualizar el usuario');
        }
      );
    }
  }

  cancelEdit(): void {
    this.selectedUser = null;
    this.userForm.reset();
  }
}

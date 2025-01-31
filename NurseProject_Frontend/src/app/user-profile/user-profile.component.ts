import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IsLoggedService } from '../services/isLogged/is-logged.service';
import { NursesService } from '../services/nursesService/nurses.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userForm: FormGroup;
  selectedUser: any;

  constructor(
    private isLoggedService: IsLoggedService,
    private nursesService: NursesService,
    private fb: FormBuilder
  ) {
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
    // this.selectedUser = this.isLoggedService.getUserData();
    this.userForm.patchValue(this.selectedUser);
  }

  updateUser(): void {
    if (this.userForm.valid) {
      console.log('Usuario actualizado:', this.userForm.value);
      alert('Usuario actualizado correctamente');
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.userForm.patchValue({ image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  confirmDelete(): void {
    if (confirm('¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.')) {
      const userId = this.isLoggedService.getUserId();

      if (userId) {
        this.nursesService.deleteNurse(userId).subscribe(
          (response) => {
            console.log(response.message); // "Nurse deleted successfully"
            alert('Cuenta eliminada correctamente');

            this.isLoggedService.logout(); // ✅ Cierra sesión
          },
          (error) => {
            console.error('Error al eliminar cuenta:', error);
            alert('Error al eliminar la cuenta. Inténtalo de nuevo.');
          }
        );
      } else {
        alert('Error: No se encontró el ID del usuario.');
      }
    }
  }
}

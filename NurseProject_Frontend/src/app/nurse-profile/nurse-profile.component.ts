import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IsLoggedService } from '../services/isLogged/is-logged.service';
import { NursesService } from '../services/nursesService/nurses.service';
import { NurseDataService } from '../services/nurseDataService/nurse-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Nurse } from '../model/Nurse';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './nurse-profile.component.html',
  styleUrls: ['./nurse-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userForm: FormGroup;
  selectedUser: any;

  constructor(
    private isLoggedService: IsLoggedService,
    private userDataService: NurseDataService,
    private nursesService: NursesService,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      first_surname: [''],
      second_surname: [''],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      image: [''],
    });
  }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    this.userDataService.getNurse().subscribe(
      (nurse) => {
        if (nurse) {
          this.selectedUser = nurse;
          this.userForm.patchValue({
            name: nurse.name,
            first_surname: nurse.first_surname,
            second_surname: nurse.second_surname,
            email: nurse.email,
            password: nurse.password,
            profile_pic: nurse.profile_pic,
          });
          console.log('Datos del usuario cargados:', nurse);
        } else {
          console.warn('No se encontraron datos del usuario.');
        }
      },
      (error) => {
        console.error('Error al cargar los datos del usuario:', error);
      }
    );
  }

  updateNurse(): void {
    if (this.userForm.valid) {
      const updatedUser: Nurse = {
        id: this.selectedUser.id,
        ...this.userForm.value,
      };

      this.nursesService.updateNurse(updatedUser).subscribe(
        (response) => {
          this.userDataService.updateNurse(updatedUser);
          console.log('Usuario actualizado:', response);
        },
        (error) => {
          console.error('Error al actualizar el usuario:', error);
        }
      );
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string;
        this.userForm.patchValue({ image: base64Image.split(',')[1] }); // Envía solo la parte base64
      };
      reader.readAsDataURL(file);
    }
  }

  confirmDelete(): void {
    if (
      confirm(
        '¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.'
      )
    ) {
      const userId = this.isLoggedService.getUserId();

      if (userId) {
        this.nursesService.deleteNurse(userId).subscribe(
          (response) => {
            console.log(response.message); // "Nurse deleted successfully"
            alert('Cuenta eliminada correctamente');

            this.isLoggedService.logout(); // Cierra sesión
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

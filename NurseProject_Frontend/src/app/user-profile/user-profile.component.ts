import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IsLoggedService } from '../services/isLogged/is-logged.service';
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
    //this.selectedUser = this.isLoggedService.getUserData();
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
      console.log('Cuenta eliminada');
      alert('Cuenta eliminada correctamente');
      // Aqui hay que poner que se elimine la cuenta con el endpoint y que envie a la pagina de login y registro .... OS LO DEJO EN VUESTRAS MANOS AKISHA Y MONICAAAAAAAAA
    }
  }
}

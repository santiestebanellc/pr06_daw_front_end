import { Injectable } from '@angular/core';
import { NURSE_USERS } from '../local-data/nurse-users';
import { Nurse } from '../model/Nurse';

@Injectable({
  providedIn: 'root',
})
export class NursesService {
  constructor() {}

  nurse_users = NURSE_USERS;


  getNursesByParameter(parameter = '', input = '') {
    switch (parameter) {
      case 'id':
        if (input !== null) {
          this.nurse_users = NURSE_USERS.filter((nurse) => nurse.id === +input);
        } else {
          return this.nurse_users;
        }
        break;
      case 'name':
        if (input.trim() !== '') {
          this.nurse_users = NURSE_USERS.filter((nurse) =>
            nurse.name.toLowerCase().includes(input.toLowerCase())
          );
        } else {
          return this.nurse_users;
        }
        break;
      case 'first_surname':
        if (input.trim() !== '') {
          this.nurse_users = NURSE_USERS.filter((nurse) =>
            nurse.first_surname.toLowerCase().includes(input.toLowerCase())
          );
        } else {
          return this.nurse_users;
        }
        break;
      case 'second_surname':
        if (input.trim() !== '') {
          this.nurse_users = NURSE_USERS.filter((nurse) =>
            nurse.second_surname.toLowerCase().includes(input.toLowerCase())
          );
        } else {
          return this.nurse_users;
        }
        break;
      case 'email':
        if (input.trim() !== '') {
          this.nurse_users = NURSE_USERS.filter((nurse) =>
            nurse.email.toLowerCase().includes(input.toLowerCase())
          );
        } else {
          return this.nurse_users;
        }
        break;
    }
    return this.nurse_users;
  }

  getNurses() {
    return this.nurse_users;
  }

 validateLogin(email: string, password: string): boolean {
    const nurse = this.nurse_users.find(
      (n) => n.email === email && n.password === password
    );
    return !!nurse; 
  }

}

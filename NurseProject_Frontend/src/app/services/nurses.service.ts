import { Injectable } from '@angular/core';
import { NURSE_USERS } from '../local-data/nurse-users';

@Injectable({
  providedIn: 'root',
})
export class NursesService {
  constructor() {}
  nurse_users = {
    nom: 'test',
  };
  // nurse_users = NURSE_USERS;

  getNursesByParameter(parameter = '', input = '') {
    switch (parameter) {
      case 'id':
        break;
      case 'name':
        break;
      case 'first_surname':
        break;
      case 'second_surname':
        break;
      case 'email':
        break;
    }

    // listFoundNurses(name: string = ''): void {
    //   if (name.trim() !== '') {
    //     this.foundNurses = NURSE_USERS.filter((nurse) =>
    //       nurse.name.toLowerCase().includes(name.toLowerCase())
    //     );
    //   } else {
    //     this.foundNurses = NURSE_USERS;
    //   }
    // }
  }

  getNurses() {
    return this.nurse_users;
  }
}

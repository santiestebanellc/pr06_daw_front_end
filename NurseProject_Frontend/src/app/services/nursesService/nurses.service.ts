import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NURSE_USERS } from '../../local-data/nurse-users';
import { Nurse } from '../../model/Nurse';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class NursesService {
 
  private listallnurses = '/nurse/index';
  
  constructor(private http: HttpClient) {}

  getNurses(): Observable<any> {
    return this.http.get(this.listallnurses, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
 

  getNursesByParameter(parameter = '', input = '') {
    let nurse_users = NURSE_USERS;

    switch (parameter) {
      case 'id':
        if (input !== null) {
          nurse_users = NURSE_USERS.filter((nurse) => nurse.id === +input);
        } else {
          return nurse_users;
        }
        break;
      case 'name':
        if (input.trim() !== '') {
          nurse_users = NURSE_USERS.filter((nurse) =>
            nurse.name.toLowerCase().includes(input.toLowerCase())
          );
        } else {
          return nurse_users;
        }
        break;
      case 'first_surname':
        if (input.trim() !== '') {
          nurse_users = NURSE_USERS.filter((nurse) =>
            nurse.first_surname.toLowerCase().includes(input.toLowerCase())
          );
        } else {
          return nurse_users;
        }
        break;
      case 'second_surname':
        if (input.trim() !== '') {
          nurse_users = NURSE_USERS.filter((nurse) =>
            nurse.second_surname.toLowerCase().includes(input.toLowerCase())
          );
        } else {
          return nurse_users;
        }
        break;
      case 'email':
        if (input.trim() !== '') {
          nurse_users = NURSE_USERS.filter((nurse) =>
            nurse.email.toLowerCase().includes(input.toLowerCase())
          );
        } else {
          return nurse_users;
        }
        break;
    }
    return nurse_users;
  }

  validateLogin(email: string, password: string): boolean {
    const nurse = NURSE_USERS.find(
      (nurse) => nurse.email === email && nurse.password === password
    );
    return !!nurse;
  }

  registerNurse(nurseData: Nurse): Observable<any> {
    const url = 'http://127.0.0.1:8000/nurse/';
  
    return this.http.post(url, nurseData);
  }

}

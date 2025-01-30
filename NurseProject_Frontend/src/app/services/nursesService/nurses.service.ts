import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NURSE_USERS } from '../../local-data/nurse-users';
import { Nurse } from '../../model/Nurse';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NursesService {
  private listallnurses = '/nurse/index';
  private loginnurse = '/nurse/login';
  private findNurse = '/nurse/find';

  constructor(private http: HttpClient) {}

  getNurses(): Observable<any> {
    return this.http.get(this.listallnurses);
  }

  getNursesByParameter(parameter = '', input = '') {
    const url = this.findNurse + '/' + parameter + '/' + input;
    return this.http.get(url);
  }

  validateLogin(email: string, password: string): Observable<any> {
    const url =
      this.loginnurse +
      `?email=${encodeURIComponent(email)}&password=${encodeURIComponent(
        password
      )}`;
    return this.http.post(url, {});
  }

  registerNurse(nurseData: Nurse): Observable<any> {
    const url = '/nurse/register';

    return this.http.post(url, nurseData);
  }
}

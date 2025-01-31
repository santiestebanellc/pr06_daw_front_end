import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NURSE_USERS } from '../../local-data/nurse-users';
import { Nurse } from '../../model/Nurse';

@Injectable({
  providedIn: 'root',
})
export class NursesService {
  private listallnurses = '/nurse/index';
  private loginnurse = '/nurse/login';
  private findNurse = '/nurse/find';

  constructor(private http: HttpClient) {}

  getNurses(): Observable<any[]> {
    return this.http.get<any[]>(this.listallnurses).pipe(
      map((nurses) => {
        console.log('Datos recibidos:', nurses); 
        return nurses.map((nurse) => ({
          ...nurse,
          profile_pic: this.formatImage(nurse.image), 
        }));
      })
    );
  }
  
  private formatImage(image: any): string {
    if (!image) return 'assets/default-profile.png'; 
    if (typeof image === 'string' && image.startsWith('data:image')) return image;
    return `data:image/png;base64,${image}`; 
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
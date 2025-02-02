import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Nurse } from '../../model/Nurse';

@Injectable({
  providedIn: 'root',
})
export class NursesService {
  private listAllNurses = '/nurse/index';
  private loginNurse = '/nurse/login';
  private findNurse = '/nurse/find';

  constructor(private http: HttpClient) { }

  getNurses(): Observable<any[]> {
    return this.http.get<any[]>(this.listAllNurses).pipe(
      map((nurses) => {
        console.log('Datos recibidos de todos los enfermeros:', nurses);
        return nurses.map((nurse) => ({
          ...nurse,
          profile_pic: this.formatImage(nurse.image),
        }));
      })
    );
  }

  private formatImage(image: any): string {
    if (typeof image === 'string' && image.startsWith('data:image'))
      return image;
    return `data:image/png;base64,${image}`;
  }

  getNursesByParameter(parameter = '', input = ''): Observable<any[]> {
    const url = `${this.findNurse}/${parameter}/${input}`;
    return this.http.get<any[]>(url).pipe(
      map((nurses) => {
        console.log('Datos de búsqueda de enfermeros:', nurses);
        return nurses.map((nurse) => ({
          ...nurse,
          profile_pic: this.formatImage(nurse.image),
        }));
      })
    );
  }

  validateLogin(
    email: string,
    password: string
  ): Observable<{ success: boolean; id: number }> {
    const url = `${this.loginNurse}?email=${encodeURIComponent(
      email
    )}&password=${encodeURIComponent(password)}`;
    return this.http.post<{ success: boolean; id: number }>(url, {});
  }

  registerNurse(nurseData: Nurse): Observable<any> {
    const url = '/nurse/register';
    return this.http.post(url, nurseData);
  }

  deleteNurse(id: number): Observable<{ message: string }> {
    const url = `/nurse/delete/${id}`;
    return this.http.delete<{ message: string }>(url);
  }

  updateNurse(nurseData: Nurse): Observable<{ message: string }> {
    const url = '/nurse/edit';
    return this.http.put<{ message: string }>(url, nurseData);
  }
}

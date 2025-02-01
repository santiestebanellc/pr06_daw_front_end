import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NursesService } from '../nursesService/nurses.service';
import { IsLoggedService } from '../isLogged/is-logged.service';

export interface User {
  id: number;
  name: string;
  first_surname: string;
  second_surname: string;
  email: string;
  password: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private userSubject = new BehaviorSubject<User | null>(null);
  userSubject$ = this.userSubject.asObservable();

  constructor(
    private nursesService: NursesService,
    private isLoggedService: IsLoggedService
  ) {}

  getUser(): Observable<User | null> {
    this.nursesService
      .getNursesByParameter('id', this.isLoggedService.getUserId()?.toString())
      .subscribe(
        (nurses) => {
          if (nurses.length > 0) {
            this.userSubject.next(nurses[0]);
          }
        },
        (error) => {
          console.error('Error al obtener los datos del usuario:', error);
        }
      );
    return this.userSubject.asObservable();
  }

  updateUser(): Observable<User | null> {
    return this.userSubject.asObservable();
  }
}

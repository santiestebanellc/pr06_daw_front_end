import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NursesService } from '../nursesService/nurses.service';
import { IsLoggedService } from '../isLogged/is-logged.service';
import { Nurse } from '../../model/Nurse';

@Injectable({
  providedIn: 'root',
})
export class NurseDataService {
  private nurseSubject = new BehaviorSubject<Nurse | null>(null);
  nurseSubject$ = this.nurseSubject.asObservable();

  constructor(
    private nursesService: NursesService,
    private isLoggedService: IsLoggedService
  ) {}

  getNurse(): Observable<Nurse | null> {
    this.nursesService
      .getNursesByParameter('id', this.isLoggedService.getUserId()?.toString())
      .subscribe(
        (nurses) => {
          if (nurses.length > 0) {
            this.nurseSubject.next(nurses[0]);
          }
        },
        (error) => {
          console.error('Error al obtener los datos del usuario:', error);
        }
      );
    return this.nurseSubject.asObservable();
  }

  updateNurse(updatedNurse: Nurse): void {
    this.nurseSubject.next(updatedNurse);
  }
}

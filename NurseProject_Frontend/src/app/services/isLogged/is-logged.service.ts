import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedService {
  constructor(private router: Router) {}

  private isLoggedSubject = new BehaviorSubject<boolean>(false);
  isLogged$ = this.isLoggedSubject.asObservable();

  login() {
    this.isLoggedSubject.next(true);
    this.router.navigate(['/list-all-nurses']);
  }

  logout() {
    this.isLoggedSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.isLoggedSubject.value;
  }
}

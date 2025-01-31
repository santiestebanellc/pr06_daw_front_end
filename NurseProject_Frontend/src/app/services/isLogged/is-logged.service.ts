import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedService {
  private isLoggedSubject = new BehaviorSubject<boolean>(this.isAuthenticated()); // ✅ Inicializa con el estado actual
  isLogged$ = this.isLoggedSubject.asObservable(); // ✅ Observable para suscribirse a cambios

  constructor(private router: Router) {}

  login(userId: number): void {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userId', userId.toString());
    this.isLoggedSubject.next(true); // ✅ Notifica que el usuario está autenticado
    this.router.navigate(['/list-all-nurses']);
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
    this.isLoggedSubject.next(false); // ✅ Notifica que el usuario cerró sesión
    this.router.navigate(['/home']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getUserId(): number | null {
    const userId = localStorage.getItem('userId');
    return userId ? parseInt(userId, 10) : null;
  }
}

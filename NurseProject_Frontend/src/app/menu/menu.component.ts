import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IsLoggedService } from '../services/isLogged/is-logged.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  isLogged: boolean = false;

  constructor(
    private isLoggedService: IsLoggedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedService.isLogged$.subscribe((isLoggedStatus) => {
      this.isLogged = isLoggedStatus;
    });
  }

  logout(): void {
    this.isLoggedService.logout();
    this.router.navigate(['/home']);
  }
}

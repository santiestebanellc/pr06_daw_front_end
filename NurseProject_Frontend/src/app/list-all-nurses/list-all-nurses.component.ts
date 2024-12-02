import { Component } from '@angular/core';
import { NURSE_USERS } from '../nurse-users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-all-nurses',
  imports: [CommonModule],
  templateUrl: './list-all-nurses.component.html',
  styleUrl: './list-all-nurses.component.css'
})
export class ListAllNursesComponent {
  foundNurses = NURSE_USERS;

  listAllNurses() {
    this.foundNurses = NURSE_USERS;
  }
}

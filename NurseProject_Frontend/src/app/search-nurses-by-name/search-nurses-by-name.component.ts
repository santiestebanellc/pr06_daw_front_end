import { Component } from '@angular/core';
import { NURSE_USERS } from '../local-data/nurse-users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-nurses-by-name',
  templateUrl: './search-nurses-by-name.component.html',
  styleUrl: './search-nurses-by-name.component.css',
  imports: [CommonModule],
})
export class SearchNursesByNameComponent {
  foundNurses = NURSE_USERS;

  listFoundNurses(name: string = ''): void {
    if (name.trim() !== '') {
      this.foundNurses = NURSE_USERS.filter((nurse) =>
        nurse.name.toLowerCase().includes(name.toLowerCase())
      );
    } else {
      this.foundNurses = NURSE_USERS;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { NURSE_USERS } from '../local-data/nurse-users';
import { CommonModule } from '@angular/common';
import { NursesService } from '../services/nurses.service';

@Component({
  selector: 'app-search-nurses-by-name',
  templateUrl: './search-nurses-by-name.component.html',
  styleUrl: './search-nurses-by-name.component.css',
  providers: [NursesService],
  imports: [CommonModule],
})
export class SearchNursesByNameComponent implements OnInit {
  constructor(private nursesService: NursesService) {}

  // datos obtenidos de services
  nurses_users: any;

  ngOnInit(): void {
    this.nurses_users = this.nursesService.getNurses();
  }
}

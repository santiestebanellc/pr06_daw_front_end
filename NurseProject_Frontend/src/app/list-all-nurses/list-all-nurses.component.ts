import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NursesService } from '../services/nurses.service';

@Component({
  selector: 'app-list-all-nurses',
  imports: [CommonModule],
  providers: [NursesService],
  templateUrl: './list-all-nurses.component.html',
  styleUrl: './list-all-nurses.component.css'
})
export class ListAllNursesComponent implements OnInit {
  constructor(private nursesService: NursesService) {}

  // datos obtained from services
  nurses_users: any;

  ngOnInit(): void {
    this.nurses_users = this.nursesService.getNurses();
  }
}

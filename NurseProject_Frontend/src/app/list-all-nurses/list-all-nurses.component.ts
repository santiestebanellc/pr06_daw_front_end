import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NursesService } from '../services/nursesService/nurses.service';

@Component({
  selector: 'app-list-all-nurses',
  imports: [CommonModule],
  providers: [NursesService],
  templateUrl: './list-all-nurses.component.html',
  styleUrls: ['./list-all-nurses.component.css'],
})
export class ListAllNursesComponent implements OnInit {
  nurses_users: any = [];

  constructor(private nursesService: NursesService) {}

  ngOnInit(): void {
    this.nursesService.getNurses().subscribe(
      (data) => {
        this.nurses_users = data;
      },
      (error) => {
        console.error('Error fetching nurses:', error);
      }
    );
  }
}
 
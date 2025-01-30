import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NursesService } from '../services/nursesService/nurses.service';

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

  getNursesByParameter(parameter = '', value = '') {
    console.log('hola');

    this.nursesService.getNursesByParameter(parameter, value).subscribe(
      (response) => {
        console.log(response);

        this.nurses_users = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this.nurses_users = this.nursesService.getNurses();
  }
}

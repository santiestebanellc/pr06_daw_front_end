import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NursesService } from '../services/nursesService/nurses.service';

@Component({
  selector: 'app-search-nurses-by-name',
  templateUrl: './search-nurses-by-name.component.html',
  styleUrls: ['./search-nurses-by-name.component.css'],
  providers: [NursesService],
  imports: [CommonModule],
})
export class SearchNursesByNameComponent implements OnInit {
  nurses_users: any = [];

  constructor(private nursesService: NursesService) {}

  getNursesByParameter(parameter: string, value: string): void {
    console.log(
      'Buscando enfermeros con parámetro:',
      parameter,
      'y valor:',
      value
    );

    this.nursesService.getNursesByParameter(parameter, value).subscribe(
      (response) => {
        console.log('Respuesta de la búsqueda:', response);
        this.nurses_users = response;
      },
      (err) => {
        console.log('Error al obtener los enfermeros:', err);
      }
    );
  }

  ngOnInit(): void {
    this.nursesService.getNurses();
  }
}

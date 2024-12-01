import { Routes } from '@angular/router';
import { SearchNursesByNameComponent } from './search-nurses-by-name/search-nurses-by-name.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'list-all-nurses',
    //TODO ListNurses
    component: AppComponent,
  },
  {
    path: 'nurses-login',
    //TODO LoginNurses
    component: AppComponent,
  },
  { path: 'search-nurses-by-name', component: SearchNursesByNameComponent },
];

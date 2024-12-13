import { Routes } from '@angular/router';
import { SearchNursesByNameComponent } from './search-nurses-by-name/search-nurses-by-name.component';
import { LoginComponent } from './login/login.component';
import { ListAllNursesComponent } from './list-all-nurses/list-all-nurses.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: 'list-all-nurses',
    component: ListAllNursesComponent,
  },
  {
    path: 'nurses-login',
    component: LoginComponent,
  },
  { path: 'search-nurses-by-name', component: SearchNursesByNameComponent },
  {
    path: 'nurses-register',
    component: RegisterComponent,
  },
];

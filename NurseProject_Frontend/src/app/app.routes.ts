import { Routes } from '@angular/router';
import { SearchNursesByNameComponent } from './search-nurses-by-name/search-nurses-by-name.component';
import { LoginComponent } from './login/login.component';
import { ListAllNursesComponent } from './list-all-nurses/list-all-nurses.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { IsLoggedGuard } from './guards/is-logged.guard';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'nurses-login',
    component: LoginComponent,
  },
  {
    path: 'nurses-register',
    component: RegisterComponent,
  },
  {
    path: 'list-all-nurses',
    component: ListAllNursesComponent,
    canActivate: [IsLoggedGuard],
  },
  {
    path: 'search-nurses-by-name',
    component: SearchNursesByNameComponent,
    canActivate: [IsLoggedGuard],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

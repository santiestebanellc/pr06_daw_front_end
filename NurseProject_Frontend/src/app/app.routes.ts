import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchNursesByNameComponent } from './search-nurses-by-name/search-nurses-by-name.component';

import { routes } from './routes'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchNursesByNameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

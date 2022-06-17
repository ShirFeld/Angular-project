import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidentsModule } from './Residents/residents.module';
import {BusinessesModule} from './Businesses/businesses.module'
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeesModule } from './employees/employees.module';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ResidentsModule,
    BusinessesModule,
    EmployeesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidentsModule } from './Residents/residents.module';
import { EventsModule } from './events.module';
import { EmploeeysModule } from './Employees/emploeeys.module';
import { BusinessesModule } from './Businesses/businesses.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ResidentsModule,
    EventsModule,
    EmploeeysModule,
    BusinessesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

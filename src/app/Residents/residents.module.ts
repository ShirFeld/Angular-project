import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentsRoutingModule } from './residents-routing.module';
import { ResidentDetailsComponent } from './resident-details/resident-details.component';
import { ResidentsListComponent } from './residents-list/residents-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ResidentDetailsComponent,
    ResidentsListComponent
  ],
  imports: [
    CommonModule,
    ResidentsRoutingModule,
    FormsModule
  ]
})
export class ResidentsModule { }

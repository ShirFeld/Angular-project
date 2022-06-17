import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessesRoutingModule } from './businesses-routing.module';
import { BusinessListComponent } from './business-list/business-list.component';


@NgModule({
  declarations: [
    BusinessListComponent
  ],
  imports: [
    CommonModule,
    BusinessesRoutingModule
  ]
})
export class BusinessesModule { }

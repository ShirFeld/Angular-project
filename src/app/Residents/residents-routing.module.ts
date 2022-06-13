import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResidentsListComponent} from './residents-list/residents-list.component'
import {ResidentDetailsComponent} from './resident-details/resident-details.component'


const routes: Routes = [
  { path: 'residents', component: ResidentsListComponent },
  { path: 'residents/:id', component: ResidentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentsRoutingModule { }


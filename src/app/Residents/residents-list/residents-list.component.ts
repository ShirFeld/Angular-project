import { Component, OnInit } from '@angular/core';
import Resident from '../Resident';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-residents-list',
  templateUrl: './residents-list.component.html',
  styleUrls: ['./residents-list.component.css'],
})
export class ResidentsListComponent implements OnInit {
  
  residents: Resident[] = [];

  constructor(private service: RegisterService) {}

  ngOnInit(): void {
    this.getResidents();
  }

  getResidents(): void {
    this.service.getResidents().subscribe((res) => (this.residents = res));
  }

  getResidentById(id: string) {
    let result: Resident;
    this.service.getResidentById(id).subscribe((res) => (result = res));
    return result;
  }
}
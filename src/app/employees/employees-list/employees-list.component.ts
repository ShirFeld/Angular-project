import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../employees.service'
import Employee from '../Employee';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] =[];

  constructor(private service: EmployeesService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.service.getEmployeesService().subscribe((res) => (this.employees = res));
  }

  getResidentById(id: string) {
    let result: Employee;
    this.service.getEmployeeById(id).subscribe((res) => (result = res));
    return result;
  }

  getRowColorBySalary(salary: number): string {
    if(salary > 3000) return '#6cb2da'
    return '#d73b2e';
  }
}

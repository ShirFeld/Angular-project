import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { employeesArr } from './dummy-data-employees';
import Employee from './Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  getEmployeesService(): Observable<Employee[]> {
    return of(employeesArr);
  }

  getEmployeeById(id: string): Observable<Employee> {
    return this.getEmployeesService().pipe(
      map((employees: Employee[]) => employees.find((e) => e.Id === id))
    );
  }
}
